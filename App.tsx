import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from '@aws-amplify/ui-react'

import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

import Amplify from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  React.useEffect( () => {
    const fetchUser = async () => {
      //get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if(userInfo){
        //get user from backend with the sub from auth
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
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
            createUser,
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