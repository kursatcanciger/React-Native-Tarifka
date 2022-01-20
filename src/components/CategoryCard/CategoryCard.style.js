import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(237,239,241)",
    marginVertical: 5,
    marginHorizontal: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: 10,
    alignItems: "center"
  },
  image: {
    width: 85,
    height: 85,
    resizeMode: "contain",
    borderRadius: 50
  },
  text: {
    marginLeft: 10,
    fontSize: 18
  }
});