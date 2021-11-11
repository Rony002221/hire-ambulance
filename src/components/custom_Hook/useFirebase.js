import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';

import initializeFireBase from "../firebase/FireBaseInit";

initializeFireBase();


const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = ()=>{

    const auth = getAuth();
    const [user, setUser] = useState({});



    ////////////////////////////// Function for Google Sign Up/////////////////
    const handleGoogleSignUp = ()=>{

        signInWithPopup(auth, provider)
        .then((result) => {
      
            const {displayName, email, photoURL} = result.user;

            const userInfo = {
              name : displayName,
              email : email,
              photo : photoURL,
            }

            setUser(userInfo);

            console.log(userInfo)

        }).catch((error) => {
      
        });

      }


        ////////////////////////////// Function for GitHub Sign Up/////////////////
        const handleGitHubSignUp = ()=>{

          signInWithPopup(auth, githubProvider)
          .then((result) => {
      
              const {displayName, email, photoURL} = result.user;

              const userInfo = {
                name : displayName,
                email : email,
                photo : photoURL,
              }

              setUser(userInfo);

              console.log(userInfo)

          }).catch((error) => {
      
          });

        }


        /////////////////////////onAuthStateChanged/////////////////////////
        useEffect(()=>{

            onAuthStateChanged(auth, (user) => {
                if (user) {
                  
                    setUser(user);
                } else {
                  // User is signed out
                  // ...
                }
              });



        },[])







    return {handleGoogleSignUp,handleGitHubSignUp,user}
}

export default useFirebase;