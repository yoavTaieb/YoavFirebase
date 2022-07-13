import { useEffect, useState, createContext } from "react";
import LoadingScreen from "Screens/Loading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig";
ededeede
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false)
    });
  }, []);


  if (pending) {
    return (
      <div style={{
        height: "100vh"
      }}>
        <LoadingScreen />
      </div>
    )
  }


  return (
    <AuthContext.Provider
      value={{ currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
