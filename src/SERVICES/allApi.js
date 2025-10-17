import commonAPi from "./CommonApi"
import SERVERURL from "./ServerUrl"


 export const registerApi = async (reqBody)=>{
    return await commonAPi("POST",`${SERVERURL}/register`,reqBody)
 }

  export const loginApi = async (reqBody)=>{
    return await commonAPi("POST",`${SERVERURL}/`,reqBody)
 }

