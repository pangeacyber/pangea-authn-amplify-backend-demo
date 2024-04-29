import { getUserInfo, withAPIAuthentication } from "@/utils/authCheck";
// import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { generateClient } from "aws-amplify/api";
import { createICECREAM } from '../../graphql/mutations';

const client = generateClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userEmail, userProfile } = await getUserInfo(req);

    try {
        const icecreamStatus = await createFlavorOnDynamo(req.body.flavor, userEmail);
        res.json(icecreamStatus);
    } catch (e) {
        console.error(e);
    }
}

async function createFlavorOnDynamo(flavor: string, email: string) {
    const result = await client.graphql({
        query: createICECREAM,
        variables: {
          input: {
            flavor: flavor,
            email: email
          }
        }
      });
    
      return result;
      
}

export default withAPIAuthentication(handler);