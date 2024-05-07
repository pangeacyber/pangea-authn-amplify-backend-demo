import { getUserInfo, withAPIAuthentication } from "@/utils/authCheck";
// import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { createSOFETCHDB } from '../../graphql/mutations';
import amplifyClient from "../../utils/amplify";
import { decryptBodyInTransit, encryptBodyInTransit } from "@/utils/encrypt-middleware";
import { listSOFETCHDBS } from "@/graphql/queries";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const { userEmail, userProfile } = await getUserInfo(req);

    try {
        const writeStatus = await getBurnsFromDynamoDB();
        const decryptedBurns = await decryptBodyInTransit(writeStatus);

        res.json(decryptedBurns);
    } catch (e) {
        console.error(e);
    }
}

async function getBurnsFromDynamoDB() {
    const result = await amplifyClient.graphql({
        query: listSOFETCHDBS,          
      });
    
    return result.data.listSOFETCHDBS.items;
      
}

export default handler;