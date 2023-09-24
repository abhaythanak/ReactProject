import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/Firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { LOGO } from "../../utils/constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }));
            navigate("/browse")
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      return()=> unsubscribe()
},[])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
          <img
            className="w-44"
            src={LOGO}
            alt="logo"
          />
         {user && <div className="">
            <img className="hidden md:block w-12 h-12"
            src={user.photoURL} alt="userIcon" />
            <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
          </div>}
        </div>
      );
};
