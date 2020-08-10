import React, { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { View, TouchableOpacity, Image } from 'react-native';

const MyCamera: React.FC<{}> = () => {
  const cameraRef = useRef<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    const checkPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    };
    checkPermission();
  }, []);

  const onCapture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.current?.takePictureAsync({
        quality: 0,
        base64: true,
      });
      setPhoto(photo);
    }
  };

  const onSave = async () => {
    console.log(photo);
  };

  const onBack = () => {
    setPhoto(null);
  };
  if (!hasPermission) return null;

  if (photo) {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: photo.uri }} />
        <View
          style={{
            position: 'absolute',
            display: 'flex',
            bottom: 50,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <TouchableOpacity onPress={onSave}>
            <FontAwesome
              name="upload"
              style={{ color: '#fff', fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack}>
            <FontAwesome name="undo" style={{ color: '#fff', fontSize: 40 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Camera
      style={{ flex: 1 }}
      type="back"
      autoFocus
      flashMode="auto"
      ref={cameraRef}
      ratio="16:9"
    >
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
