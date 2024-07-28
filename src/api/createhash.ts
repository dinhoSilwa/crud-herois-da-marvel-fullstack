import { MD5 } from "crypto-js";

export const privateKey = import.meta.env.VITE_PRIVATE_KEY
export const publicKey = import.meta.env.VITE_PUBLIC_KEY

if(!import.meta.env.VITE_PUBLIC_KEY || !import.meta.env.VITE_PRIVATE_KEY){
  throw new Error("As variáveis de ambientes não estão definidas corretamente")
}

export const ts = new Date().getTime().toString();
export const createHash = ts + privateKey + publicKey;
export const apihash = MD5(createHash).toString()
