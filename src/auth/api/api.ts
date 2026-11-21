import type { loginPayload } from "../types";
import { authApiClient } from "./client";


export const jwtLogin = async (loginRequest? : loginPayload) => {
    if(!loginRequest) throw new Error("Login Credentials not found");
    return (await authApiClient.post('login',loginRequest)).data?.data?.jwtToken;
                             
}