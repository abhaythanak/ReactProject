import { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidData } from "../../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../../utils/constants";

export default function Login(params) {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
       const message = checkValidData(
        email.current.value,
        password.current.value,
        isSignInForm ? null : name.current.value
        );
       setErrorMessage(message)
       if(message) return;

       if (!isSignInForm){
        //signUp form
        createUserWithEmailAndPassword(
          auth, 
          email.current.value,
          password.current.value
          )
         .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                })
             );
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
     // ...
      })
         .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage)
      // ..
      });
       } else {
        //signIn Logic
        signInWithEmailAndPassword(
            auth, 
            email.current.value,
            password.current.value
            )
         .then((userCredential) => {
         // Signed in 
          const user = userCredential.user;

         })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "-" + errorMessage)
         });
       }
    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    return(
        <div className="relative">
            <Header/>
            <div className="absolute h-screen">
               <img className=" object-cover w-full h-full sm:h-auto " src={BG_URL} alt="BG_URL" />
            </div>  
            <form onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>  
        </div>
    )
};
