import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { api } from "../utils/api";

export const HomeScreen = () => {
  return <SafeAreaView className="bg-[#262626]"></SafeAreaView>;
};

const HomeContact: React.FC<{
  expandContact: (index: number) => void;
  editTodo: (index: number, newTodo: string) => void;
  index: number;
  firstName: string;
  lastName: string;
  //photo
  todo: Todo;
}> = ({ deleteTodo, editTodo, index, todo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  return (
    <View>
      <Text className="text-white">Todo #{index + 1}:</Text>
      <Text className="font-bold text-white">{todo.title}</Text>
      <Text className="text-white">{todo.content}</Text>

      <Button title="Edit Todo" onPress={() => setIsVisible((prev) => !prev)} />
      <Button title="Delete Todo" onPress={() => deleteTodo(index)} />

      <Modal visible={isVisible}>
        <TextInput
          className="h-1/4 border-black p-2"
          value={newTodo}
          onChangeText={setNewTodo}
        />

        <Button
          title="Save"
          onPress={() => {
            editTodo(index, newTodo);
            setNewTodo("");
            setIsVisible((prev) => !prev);
          }}
        />
        <Button title="Cancel" onPress={() => setIsVisible((prev) => !prev)} />
      </Modal>
    </View>
  );
};
