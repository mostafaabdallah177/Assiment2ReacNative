import React, { useState } from "react";
import { View, StatusBar, Text } from "react-native";
import { AppStyles as styles } from "./styles";
import AddTodo from "./src/components/add-todo";
import TodoList from "./src/components/todo-list";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [TodoNumber, setTodoNumber] = useState(0);

  const handleAddTodo = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };

  return (
    <View style={styles.body}>
      <View style={{ height: "100%" }}>
        <StatusBar hidden />
        <Text style={styles.header}></Text>
        <AddTodo onTodoAdd={handleAddTodo} />
        <TodoList todos={todos} />
      </View>
    </View>
  );
};

export default App;
