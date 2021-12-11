import Checkbox from "expo-checkbox";
import React from "react";
import { useState } from "react";
import { View, Text, NativeModules, FlatList } from "react-native";
import { todoList as styles } from "../../styles";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
// const [textdir, settextdir] = useState(false);
const TodoList = ({ todos }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <FlatList
      style={{ height: "100%" }}
      data={todos}
      renderItem={({ item }) => {
        return (
          //  ...(focusToggle ? styles.todoInputFocused : {}),
          //           style={{...styles.item,
          // ...(isSelected?styles.select:{})}
          <View style={styles.item}>
            <Text
              style={{
                ...styles.titleitem,
                ...(item.done ? styles.select : {}),
              }}
            >
              Title: {item.title}
            </Text>
            <Checkbox value={isSelected} onValueChange={setSelection} />
          </View>
        );
      }}
      ListHeaderComponent={() => (
        <Text style={styles.header}>
          {/* {isSelected === true ? todos.length - 1 : {}} */}
          AllTodos: {todos.length}
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ ...styles.header, fontSize: 18 }}>Fotter</Text>
      )}
      ListEmptyComponent={() => <Text>no Todos Today </Text>}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
    />
  );
};

export default TodoList;
