import { createContext, useContext, useState } from 'react';
import { UserType } from 'constants/user';

const AuthContext = createContext<{
  isAuth: boolean;
  user?: any;
  userType?: string;
}>({
  isAuth: false,
  userType: UserType.ISSUER,
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  return (
    <AuthContext.Provider value={{ isAuth, user, userType }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
