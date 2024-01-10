import { webcrypto } from "node:crypto";
import { Web5 } from '@web5/api';


export const Auth = async () => {
    if (!globalThis.crypto) globalThis.crypto = webcrypto;

    const { web5, did } = await Web5.connect();
    return did;
}
