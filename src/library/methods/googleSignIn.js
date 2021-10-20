import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createUserInitialData } from './firebaseCreateCollections';
import { WEB_CLIENT_ID } from '@env';

export const setupGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
};

export const onGoogleButtonPress = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createUserInitialData();
      }
    });
};
