import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
    try {       
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const signInWithGithub = async () => {
    try {       
        const result = await signInWithPopup(FirebaseAuth, githubProvider);
        // return result.user
        // console.log('tamos en providers' , result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}



export const registerUserWithEmail = async ({ email, password, displayName }) =>{

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        
        const { uid, photoURL } = resp.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }

}

export const loginWithEmailPassword = async ({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}

