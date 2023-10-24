import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

export interface Todo {
  title: string;
  done: boolean;
  id: string;
}

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, "todos");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        console.log("Updated");

        const todos: Todo[] = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          } as Todo);
        });
        setTodos(todos);
      },
    });

    return () => {
      subscriber();
    };
  }, []);

  const addTodo = async () => {
    console.log("ADD");

    const docRef = await addDoc(collection(FIRESTORE_DB, "todos"), {
      title: todo,
      done: false,
    });
    setTodo("");
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

    const toggleDone = async () => {
      updateDoc(ref, { done: !item.done });
    };

    const deleteItem = async () => {
      deleteDoc(ref);
    };

    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={toggleDone} style={styles.todo}>
          {item.done && (
            <Ionicons name="md-checkmark-circle" size={36} color="green" />
          )}
          {!item.done && <Entypo name="circle" size={32} color="black" />}

          <Text style={styles.todoText}>{item.title}</Text>
        </TouchableOpacity>
        <Ionicons
          name="trash-bin-outline"
          size={24}
          color="red"
          onPress={deleteItem}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upFlex}>
        <Image
          source={require("../../assets/shape1.png")}
          style={styles.image1}
        />
        <Image
          source={require("../../assets/profile.png")}
          style={styles.image2}
        />
        <View style={styles.displyName}>
          <Text style={styles.t1}>Welcome</Text>
          <Text style={styles.t1}> Yasiru !</Text>
        </View>
      </View>
      <View style={styles.downFlex}>
        <Text style={styles.t2}>Tasks List</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Add new todo"
            onChangeText={(text: string) => setTodo(text)}
            value={todo}
          />
          <Button
            onPress={addTodo}
            title="Add Todo"
            disabled={todo === ""}
            color="#D3D3D3"
          />
        </View>
        {todos.length > 0 && (
          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo: Todo) => todo.id}
            style={styles.flatList}
          />
        )}
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },

  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    padding: 10,
    marginVertical: 4,
  },

  todo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  upFlex: {
    backgroundColor: "#62D2C3",
    width: 375,
    height: 292,
    flexShrink: 0,
  },
  image1: {
    marginRight: 170,
    marginTop: 0,
  },

  image2: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  displyName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  t1: {
    fontSize: 24,
    fontWeight: "500",
  },
  downFlex: {
    flex: 1,
    marginTop: 20,
  },
  t2: {
    fontSize: 25,
    fontWeight: "700",
    padding: 10,
  },
  list: {
    backgroundColor: "#e1f6f3",
    margin: 20,
  },
  flatList: {
    marginHorizontal: 10,
  },
});
