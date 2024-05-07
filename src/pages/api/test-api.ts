import { encryptBodyInTransit } from "@/utils/encrypt-middleware";
import { NextApiRequest, NextApiResponse } from "next";

function hi(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(req.body);
}

export default encryptBodyInTransit(hi);