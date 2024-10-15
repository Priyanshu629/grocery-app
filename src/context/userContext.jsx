import { createContext, useContext,useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn ,user,setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = ()=> useContext(UserContext)