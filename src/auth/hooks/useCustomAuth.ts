import { useCallback, useEffect, useState } from "react";
import type { loginPayload } from "../types";
import { jwtLogin } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { registerLogoutHandler } from "../session/authLogoutHandler";
import { useNavigate } from "@tanstack/react-router";


export default function useCustomAuth(){
const [authenticated,setAuthenticated] = useState<boolean>(localStorage.getItem("token")!=null);
  console.log("🔄 useCustomAuth rendered, authenticated =", authenticated);

const [role,setRole] = useState<string>("ADMIN");
    const loginMutation = useMutation({
    mutationFn: jwtLogin,
    onSuccess: (token:string) => {
        localStorage.setItem("token", token);
        setAuthenticated(true);
    },
      onError: (error) => {
        console.error("Login failed:", error);
        setAuthenticated(false);
    },
});

const login = async (loginRequest : loginPayload)=>{
    localStorage.removeItem("token");
    loginMutation.mutate(loginRequest);
    
}

const logout = useCallback(async () => {
  console.log("🚪 logout called, authenticated =", authenticated);

  localStorage.removeItem("token");

  setAuthenticated(false);

  console.log("🚪 logout finished");
}, [authenticated]);

useEffect(()=>{
    registerLogoutHandler(logout);
},[logout])



return {authenticated,login,logout,role};


    
}