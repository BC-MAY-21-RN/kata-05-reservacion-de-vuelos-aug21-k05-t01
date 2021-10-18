import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createUserInitialData} from './firebaseRegister';

const WEB_CLIENT_ID = "1064695565218-u4igcl23o7kb6jp879jb328b8fm16n1a.apps.googleusercontent.com"

export const setupGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
};

export const onGoogleButtonPress = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createUserInitialData();
      }
    });
};
