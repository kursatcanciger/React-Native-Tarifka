import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    flex: 1,
    width: "100%",
    height: screen.height / 5,
  },
  inner_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  text: {
    textAlign: "right",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30
  }
});