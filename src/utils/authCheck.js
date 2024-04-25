import { PangeaConfig, AuthNService, PangeaErrors, AuthN } from "pangea-node-sdk";

const config = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });
const authn = new AuthNService(process.env.PANGEA_TOKEN, config);

const getBearerToken = (req) => {
  const authorizationHeader =
  req.headers instanceof Headers
  ? req.headers.get("authorization")
  : req.headers?.authorization;
  
  const authorizationHeaderParts = authorizationHeader?.split(" ");
  
  const bearerToken =
  authorizationHeaderParts?.[0]?.toLowerCase() === "bearer" &&
  authorizationHeaderParts?.[1];
  
  return bearerToken;
};

const validateToken = async (token) => {
  const result = false;
  
  if (token) {
    // Check the token against the authn service
    try {
      const response = await authn.client.clientToken.check(token);
      const authStatus = response.status === "Success";
      
      const userEmail = authStatus ? response.result.email : "";
      const userProfile = authStatus ? response.result.profile : "";
      
      return authStatus;
      
    } catch (error) {
      if (error instanceof PangeaErrors.APIError) {
        console.error("Something went wrong with your Pangea Configuration");
        console.error(error.toString());
      } else {
        console.error(
          "Error occured during token validation. Looks like environment variables haven't been set correctly, or the service token has expired",
          error
          );
        }
      }
    }
    return result;
};
  
// Fetch user Info
export const getUserInfo = async (req) => {
  const token = getBearerToken(req);
  const result = {userEmail: "", userProfile: ""};
  
  if (token) {
    // Check the token against the authn service
    try {
      const response = await authn.client.clientToken.check(token);
      const authStatus = response.status === "Success";
      
      const userEmail = authStatus ? response.result.email : "";
      const userProfile = authStatus ? response.result.profile : "";
      
      return { userEmail, userProfile };
      
    } catch (error) {
      if (error instanceof PangeaErrors.APIError) {
        console.error("Something went wrong with your Pangea Configuration");
        console.error(error.toString());
      } else {
        console.error(
          "Error occured during token validation. Looks like environment variables haven't been set correctly, or the service token has expired",
          error
          );
        }
      }
  }
  return result;
}
    
export const withAPIAuthentication = (apiHandler) => {
  return async (req, res) => {
    // Check the environment variables
    if (
      !process.env.PANGEA_DOMAIN || 
      !process.env.PANGEA_TOKEN
      ) {
        console.error(
          "Missing environment variables, please make sure you have PANGEA_DOMAIN and AUTHN_TOKEN set in your .env file"
          );
          return res.status(401).json("Unauthorized");
        }
        
    const isTokenValid = await validateToken(getBearerToken(req));
    
    // Authentication failed, return 401
    if (!isTokenValid) {
      return res.status(401).json("Unauthorized");
    }
        
    // We are good to continue
    return await apiHandler(req, res);
  };
};
    