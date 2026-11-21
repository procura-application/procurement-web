
let logoutHandler : (()=> void) | null = null;

export const registerLogoutHandler = (logout: ()=>void) => {
 logoutHandler = logout;
}

export const triggerLogout = () => {
    console.log("inside trigger logout");
    console.log("logout handler:",logoutHandler)
    logoutHandler?.();
}