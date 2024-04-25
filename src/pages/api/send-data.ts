import { getUserInfo, withAPIAuthentication } from "@/utils/authCheck";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userEmail, userProfile } = await getUserInfo(req);

    try {
        const client = await clientPromise;
        const db = client.db("webappdb");
        const icecreamStatus = await db
            .collection("icecream").insertOne({ email: userEmail, flavor: req.body.flavor });
        res.json(icecreamStatus);
    } catch (e) {
        console.error(e);
    }
}

export default withAPIAuthentication(handler);