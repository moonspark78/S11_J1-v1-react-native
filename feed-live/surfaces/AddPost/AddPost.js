import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function AddPost() {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // 📸 Ouvrir la galerie iPhone
  const handleSelectImage = async () => {
    // Permission galerie
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        'Permission requise',
        "L'accès à la galerie est nécessaire"
      );
      return;
    }

    // Ouvrir la galerie
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (!selectedImage) {
      Alert.alert('Erreur', 'Veuillez sélectionner une image');
      return;
    }

    Alert.alert('Succès', 'Votre post a été publié !');
    setCaption('');
    setSelectedImage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ajouter un Post</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {selectedImage ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.selectedImage}
            />

            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => setSelectedImage(null)}
            >
              <Ionicons
                name="close-circle"
                size={32}
                color="#FF6B6B"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.selectImageButton}
            onPress={handleSelectImage}
          >
            <Ionicons
              name="image-outline"
              size={60}
              color="#00BCD4"
            />
            <Text style={styles.selectImageText}>
              Sélectionner une image
            </Text>
          </TouchableOpacity>
        )}

        {/* CAPTION */}
        <TextInput
          style={styles.captionInput}
          placeholder="Écrivez une légende..."
          value={caption}
          onChangeText={setCaption}
          multiline
          maxLength={500}
        />

        <Text style={styles.characterCount}>
          {caption.length}/500
        </Text>

        {/* POST BUTTON */}
        <TouchableOpacity
          style={styles.postButton}
          onPress={handlePost}
          activeOpacity={0.8}
        >
          <Text style={styles.postButtonText}>Publier</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  selectImageButton: {
    height: 250,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00BCD4',
    borderStyle: 'dashed',
  },

  selectImageText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#00BCD4',
  },

  imageContainer: {
    position: 'relative',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },

  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  removeImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },

  captionInput: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    height: 120,
    textAlignVertical: 'top',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },

  characterCount: {
    marginTop: 5,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
  },

  postButton: {
    marginTop: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  postButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
});
