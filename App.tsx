import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from 'aws-amplify-react-native';
import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getWhatsappUser } from './src/graphql/queries';
import { createWhatsappUser } from './src/graphql/mutations';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  useEffect( () => {
    const fetchUser = async () => {
      //get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if(userInfo){
        //get user from backend with the sub from auth
        const userData = await API.graphql(
          graphqlOperation(
            getWhatsappUser,
            { id: userInfo.attributes.sub }
            )
        )
        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using WhatsApp',
        }
        await API.graphql(
          graphqlOperation(
            createWhatsappUser,
            { input: newUser }
          )
        )
      }
      //get the user from backend with the user id from auth

      //if there is no user in the DB the id, then create one
    }
    fetchUser();
  }, [])
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)
