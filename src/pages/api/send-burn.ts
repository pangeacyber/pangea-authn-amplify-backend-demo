import { getUserInfo, withAPIAuthentication } from "@/utils/authCheck";
// import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { createSOFETCHDB } from '../../graphql/mutations';
import amplifyClient from "../../utils/amplify";
import { encryptBodyInTransit } from "@/utils/encrypt-middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const { userEmail, userProfile } = await getUserInfo(req);

    try {
        const writeStatus = await createBurnOnDynamo(req.body.name, req.body.burn, req.body.image);
        res.json(writeStatus);
    } catch (e) {
        console.error(e);
    }
}

async function createBurnOnDynamo(name: string, burn: string, image: string | "") {
    const result = await amplifyClient.graphql({
        query: createSOFETCHDB,
        variables: {
          input: {
            name: name,
            burn: burn,
            image: image
          }
        }
      });
    
      return result;
      
}

export default withAPIAuthentication(encryptBodyInTransit(handler));