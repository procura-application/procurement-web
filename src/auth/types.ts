export interface User {

    username?: string;
}

export type loginPayload = {
    username: string;
    password: string;
}

export interface AuthContextType{
    authenticated: boolean;
    login: (param:loginPayload) => void;
    logout: () => void;
    role: string;
}

export type AuthProviderProps = {
    children: React.ReactNode;
};