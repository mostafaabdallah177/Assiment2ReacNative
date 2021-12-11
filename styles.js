import { StyleSheet } from "react-native";
export const AppStyles = StyleSheet.create({
  body: {
    backgroundColor: "#bbdefb",
  },
  header: {
    padding: 10,
    fontSize: 30,
    color: "black",
    textAlign: "center",
    backgroundColor: "black",
    width: "100%",
    color: "white",
    fontWeight: "bold",
  },

  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    margin: 5,
    width: "50%",
  },

  container: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    marginTop: 10,
    width: "20%",

    borderRadius: 20,
    overflow: "hidden",
  },
});

export const addTodoStyles = StyleSheet.create({
  container: {
    margin: 2,
    padding: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoInput: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    padding: 0,
    paddingLeft: 2,
    fontSize: 18,
  },
  todoInputFocused: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "#FFFF00",
  },
  todoAddBtn: {
    backgroundColor: "black",
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  todoAddBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const todoList = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  select: {
    textDecorationLine: "line-through",
  },

  titleitem: {
    fontSize: 25,
    color: "#ab47bc",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
  },
  empty: { color: "grey" },
  seperator: { borderWidth: 1, margin: 5, borderColor: "black" },
});
