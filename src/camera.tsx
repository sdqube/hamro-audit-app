import React, { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

const MyCamera: React.FC<{}> = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    };
    checkPermission();
  }, []);

  const onCapture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.current?.takePictureAsync();
      console.log(photo);
    }
  };
  if (!hasPermission) return null;
  return (
    <Camera style={{ flex: 1 }} type="back" ref={cameraRef}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
          onPress={onCapture}
        >
          <FontAwesome name="camera" style={{ color: '#fff', fontSize: 40 }} />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default MyCamera;
