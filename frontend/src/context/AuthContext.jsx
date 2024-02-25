/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    async function checkIsLoggedIn() {
        const logged = await axios("http://localhost:7439/auth/is_logged_in");
        setIsLoggedIn(logged.data);
    }

    useEffect(() => {
        checkIsLoggedIn()
    }, [])

  return <AuthContext.Provider value={{isLoggedIn, checkIsLoggedIn}}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext
export { AuthContextProvider }

