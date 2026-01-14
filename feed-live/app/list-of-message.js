import { useLocalSearchParams } from "expo-router";
import ListOfMessage from "../surfaces/Conversations/ListOfMessage";

export default function ListOfMessageScreen() {
  const { conversation } = useLocalSearchParams();

  const parsedConversation = conversation
    ? JSON.parse(conversation)
    : null;

  return <ListOfMessage conversation={parsedConversation} />;
}
