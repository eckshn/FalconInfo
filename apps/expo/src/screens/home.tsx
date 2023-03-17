import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Contact {
  name: string;
  number: string;
}

export const HomeScreen = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <SafeAreaView className="bg-[#9286a2] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <AddNewContactButton addContact={(newContact) => newContact} />
        {contacts.map &&
          contacts.map((contact, index) => (
            <ContactItem
              key={index}
              editName={(index, contact) => {
                setContacts((prev) =>
                  prev.map((val, prevIndex) =>
                    prevIndex === index ? contact : val,
                  ),
                );
              }}
              deleteContact={(index) => {
                setContacts((prev) =>
                  prev.filter((_, prevIndex) => prevIndex !== index),
                );
              }}
              contact={contact}
              index={index}
            />
          ))}
      </View>
    </SafeAreaView>
  );
};

const AddNewContactButton: React.FC<{
  addContact: (newContact: { name: string; number: string }) => void;
}> = ({ addContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <>
      <Button
        title="Add New Contact"
        onPress={() => setIsVisible((prev) => !prev)}
      />

      <Modal visible={isVisible}>
        <TextInput
          className="h-1/4 border-black p-2"
          value={newName}
          onChangeText={setNewName}
          placeholder="Untitled"
        />

        <TextInput
          className="h-1/4 border-black p-2"
          value={newNumber}
          onChangeText={setNewNumber}
          placeholder="Press here to make new content"
        />

        <Button
          title="Save"
          onPress={() => {
            addContact({ name: newName, number: newNumber });
            setNewName("");
            setNewNumber("");
            setIsVisible((prev) => !prev);
          }}
        />
        <Button title="Cancel" onPress={() => setIsVisible((prev) => !prev)} />
      </Modal>
    </>
  );
};

const ContactItem: React.FC<{
  deleteContact: (index: number) => void;
  editName: (index: number, newName: Contact) => void;
  index: number;
  contact: Contact;
}> = ({ deleteContact, editName, index, contact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newName, setNewName] = useState("");

  return (
    <View>
      <Text className="font-bold text-white">{contact.name}</Text>

      <Button title="Edit Name" onPress={() => setIsVisible((prev) => !prev)} />
      <Button title="Delete Contact" onPress={() => deleteContact(index)} />

      <Modal visible={isVisible}>
        <TextInput
          className="h-1/4 border-black p-2"
          value={newName}
          onChangeText={setNewName}
        />

        <Button
          title="Save"
          onPress={() => {
            editName(index, { ...contact, name: newName });
            setNewName("");
            setIsVisible((prev) => !prev);
          }}
        />
        <Button title="Cancel" onPress={() => setIsVisible((prev) => !prev)} />
      </Modal>
    </View>
  );
};
