import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
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


        ////////////////////funtionality for sign out////////////
        const handleSignOut = ()=>{

            signOut(auth).then(() => {
            
                setUser({});
              }).catch((error) => {
                // An error happened.
              });

        }




    return {handleGoogleSignUp,handleGitHubSignUp,user,handleSignOut}
}

export default useFirebase;