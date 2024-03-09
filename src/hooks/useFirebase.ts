/** @format */

import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect } from "react";
import app from "../config/firebase";

const auth = getAuth(app);

export function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User esta logado
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
        } else {
          // User esta deslogado
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}
