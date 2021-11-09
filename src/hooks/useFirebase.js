import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,

    onAuthStateChanged,
    signOut,

} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});


    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);

            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return {
        handleGoogleLogin,
        user,
        handleLogout,
    };
};

export default useFirebase;
