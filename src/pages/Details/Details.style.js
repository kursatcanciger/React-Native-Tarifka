import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(242,242,242)",
    flex: 1
  },
  inner_container: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(189,189,189)"
  },
  image: {
    width: screen.width,
    height: screen.height / 3,
  },
  title: {
    color: "rgb(152,52,48)",
    fontWeight: "bold",
    fontSize: 24,
    margin: 5
  },
  area: {
    color: "rgb(152,52,48)",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 2,
    marginBottom: 5,
    marginHorizontal: 5
  },
  details: {
    padding: 5
  },
  button: {
    backgroundColor: "rgb(234,51,35)",
    marginBottom: 20,
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 10
  },
  button_text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});