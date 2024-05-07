import { NextApiRequest, NextApiResponse } from 'next';
import { PangeaConfig, VaultService, Vault } from "pangea-node-sdk";

const token = process.env.PANGEA_TOKEN as string;
const config = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });
const vault = new VaultService(token, config);


export const encryptBodyInTransit = (apiHandler: any) => {
    return async (req, res) => {
        try {
            if(req.body.burn) {
                const createResponse = await vault.encryptStructured({
                    id: process.env.PANGEA_VAULT_KEY_ID as string,
                    structured_data: req.body,
                    filter: "$.burn"
                })

                req.body = createResponse.result.structured_data;

            }

            return await apiHandler(req, res);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e });
        }
    }
}


export const decryptBodyInTransit = async (body: any) => {
        try {
            const createResponse = await vault.decryptStructured({
                    id: process.env.PANGEA_VAULT_KEY_ID as string,
                    structured_data: {"data": body},
                    filter: "$.data[*].burn"
            })

            return createResponse.result.structured_data.data;
        } catch (e) {
            console.error(e);
            
        }
}