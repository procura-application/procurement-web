import useCustomAuth from "../hooks/useCustomAuth";
import { AuthContext } from "./AuthContext";
import type {  AuthProviderProps } from "../types";
import { useMemo } from "react";

const AuthProvider = ({children}:AuthProviderProps) =>{
    const {authenticated,login,logout,role} = useCustomAuth();
  console.log("🔄 AUTH PROVIDER RENDER:", authenticated);
    const value = useMemo(()=>{
        return {authenticated,login,logout,role}
    },[authenticated,login,logout,role]); 
    return <AuthContext.Provider
    value={value}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;