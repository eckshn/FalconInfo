import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { api } from "../utils/api";

export const HomeScreen = () => {
  return <SafeAreaView className="bg-[#262626]"></SafeAreaView>;
};

const HomeContact: React.FC<{
  expandContact: (index: number) => void;
  editContactName: (index: number, newName: string) => void;
  editContactNumber: (index: number, newNumber: string) => void;
  deleteContact: (index: number) => void;
  index: number;
  name: string;
  phone: number;
  //photo
}> = ({
  expandContact,
  editContactName,
  editContactNumber,
  deleteContact,
  index,
  name,
  phone,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  return (
    <View>
      <Text className="text-white">Todo #{index + 1}:</Text>
      <Text className="font-bold text-white">{name}</Text>

      <Button title={name} onPress={() => setIsVisible((prev) => !prev)} />

      <Modal visible={isVisible}>
        <TextInput
          className="h-1/4 border-black p-2"
          value={phone.toString()}
        />

        <Button
          title="Delete Contact"
          onPress={() => {
            deleteContact(index);
          }}
        />
        <Button title="Cancel" onPress={() => setIsVisible((prev) => !prev)} />
      </Modal>
    </View>
  );
};
