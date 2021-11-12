import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged, signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initializeFireBase from "../firebase/FireBaseInit";


initializeFireBase();


const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = ()=>{

    const auth = getAuth();
    const [user, setUser] = useState({});


    ////////////////////////////////////////////////////////////////////


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const getEmail = (e)=>{

      setEmail(e.target.value);

    }
    const getPassword = (e)=>{

      setPassword(e.target.value);

    }

    const handleRegister = (e)=>
    {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
     
        const {displayName, email, photoURL} = result.user;

        const userInfo = {
          name : displayName,
          email : email,
          photo : photoURL,
        }

        setUser(userInfo);
        //console.log(result.user)
      })
      .catch((error) => {
     
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }





    ////////////////////////////////////////////////////////////////////

    const handleEmailPasswordLogIn = (e)=> 
    { e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      const {displayName, email, password} = result.user;

      const userInfo = {
        name : displayName,
        email : email,
        password : password,
      }

      setUser(userInfo);
      // ...
    })
    .catch((error) => {
      
    });

  }

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

        


    return {handleGoogleSignUp,handleGitHubSignUp,user,handleSignOut,handleEmailPasswordLogIn,getEmail,getPassword}
}

export default useFirebase;