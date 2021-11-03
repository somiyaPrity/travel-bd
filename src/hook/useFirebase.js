import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import InitializationAuthentication from '../firebase/firebase.init';

InitializationAuthentication();
const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // google sign in
  // const handleGoogleSignIn = () => {
  //   setIsLoading(true);
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // };
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  // logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    user,
    isLoading,
    handleGoogleSignIn,
    logOut,
  };
};

export default useFirebase;
