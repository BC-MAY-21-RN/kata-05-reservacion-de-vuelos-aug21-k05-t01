import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createUserInitialData} from './firebaseRegister';

const WEB_CLIENT_ID = '723697772081-kg035mcdg0vmctrj0damb81frqf0p5f6.apps.googleusercontent.com';

export const setupGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
};

export const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createUserInitialData();
      }
    });
};