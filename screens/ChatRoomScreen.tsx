import React from 'react';
import { Text, FlatList, View, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native';
import InputBox from '../components/InputBox';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';

import {API, graphqlOperation, Auth } from 'aws-amplify';
import { messagesByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';

const ChatRoomScreen = () => {

  const [messages, setMessages] = React.useState([]);
  const [myId, setMyId] = React.useState(null);

  const route = useRoute();

  const fetchMessages = async () => {
    const messagesData = await API.graphql(
      graphqlOperation(
        messagesByChatRoom, {
          chatRoomID: route.params.id,
          sortDirection: "DESC",
        }
      )
    )
    setMessages(messagesData.data.messagesByChatRoom.items);
  }

  React.useEffect(() => {
    fetchMessages();
  }, [])

  React.useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])

  React.useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.chatRoomID !== route.params.id) {
          console.log("Message is in another room!")
          return;
        }

        fetchMessages();
        // setMessages([newMessage, ...messages]);
      }
    });

    return () => subscription.unsubscribe();
  }, [])

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
    <FlatList
      data={messages}
      renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
      inverted
    />

    <InputBox chatRoomID={route.params.id} />
  </ImageBackground>
  )
}

export default ChatRoomScreen;