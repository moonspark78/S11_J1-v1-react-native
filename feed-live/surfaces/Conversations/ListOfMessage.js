import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { messagesByConversation } from './conversationsData';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ListOfMessage() {
  const router = useRouter();
  const { conversation } = useLocalSearchParams();
  const parsedConversation = JSON.parse(conversation);

  const [messages, setMessages] = useState(
    messagesByConversation[parsedConversation.id] || []
  );
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'to',
        text: inputText,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'to' ? styles.messageRight : styles.messageLeft,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          item.type === 'to' ? styles.bubbleRight : styles.bubbleLeft,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{parsedConversation.name}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContent}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Votre message..."
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 18, fontFamily: 'Poppins_600SemiBold', color: '#333' },
  messagesList: { flex: 1 },
  messagesContent: { padding: 15 },
  messageContainer: { marginBottom: 10 },
  messageLeft: { alignItems: 'flex-start' },
  messageRight: { alignItems: 'flex-end' },
  messageBubble: { maxWidth: '75%', padding: 12, borderRadius: 15 },
  bubbleLeft: { backgroundColor: 'white', borderBottomLeftRadius: 0 },
  bubbleRight: { backgroundColor: '#00BCD4', borderBottomRightRadius: 0 },
  messageText: { fontSize: 14, fontFamily: 'Poppins_400Regular', color: '#333' },
  messageTime: { fontSize: 10, fontFamily: 'Poppins_400Regular', color: '#999', marginTop: 5 },
  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#e0e0e0', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#f5f5f5', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10, marginRight: 10, fontFamily: 'Poppins_400Regular', fontSize: 14, maxHeight: 100 },
  sendButton: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#00BCD4', justifyContent: 'center', alignItems: 'center' },
});
