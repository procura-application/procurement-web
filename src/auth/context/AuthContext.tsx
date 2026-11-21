import { createContext, useContext } from "react";
import type { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const useAuth = () =>{
    const context = useContext<AuthContextType | undefined>(AuthContext);
    if(!context) throw new Error("Context needs to be used within a provider");
    return context;
}
