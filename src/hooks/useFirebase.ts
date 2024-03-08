/** @format */

import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect } from "react";

const auth = getAuth();

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
