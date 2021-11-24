import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { Text, View } from '../components/Themed';
import { Camera } from 'expo-camera';

export default function CameraScreen() {

  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      console.log("in take picture");
      try{
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
        return photo;
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
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
            
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
            onPress={async () => {
              const r = await takePicture();
            }}
          >
              <Text style={{color: 'white'}}> Photo </Text>
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
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});