import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, TouchableOpacity,Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import { RootTabScreenProps } from '../types'; //TabTwoScreen

export default function TabTwoScreen( {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  //Camera ref to access camera
  const cameraRef =  useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

const takePicture = async () => {
  if(cameraRef){
    console.log("Taking picture");
    try {
      let photo = await cameraRef.current.takePictureAsync({
        allowEditing: true,
        quality:1,
      });
      return photo;
    }
       catch (error) {
      console.log(error);
    }
    
  }
} 

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio ={'1:1'} ref = {cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress = {async () => {
              const r = await takePicture();
              alert("DEBUG", JSON.stringify(r))

            }} 
          >
          <Text style={styles.text}> Photo </Text>
          </TouchableOpacity>
          
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  camera: {
    flex: 1,
    aspectRatio : 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    padding: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
  },
});
