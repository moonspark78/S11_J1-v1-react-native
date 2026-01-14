import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function PostDetails() {
  const router = useRouter();
  const {
    image,
    userName,
    userAvatar,
  } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Go Back</Text>
      </View>

      {/* USER INFO */}
      <View style={styles.userInfo}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* POST IMAGE */}
      <Image source={{ uri: image }} style={styles.postImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 10,
  },

  userName: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },

  postImage: {
    width: '100%',
    height: 400,
  },
});
