import { createContext, ReactNode, useState } from 'react';

const AuthContext = createContext({});

type Props = {
    children: ReactNode,
};

export const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState({});

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
