import React from "react";
import { View, Image, Text  } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[1]

    return(
    <View>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text>{user.name}</Text>
        </View>
        <Text>{chatRoom.lastMessage.content}</Text>
        <Text>{chatRoom.lastMessage.createdAt}</Text>
    </View>
    )
  
};

export default ChatListItem