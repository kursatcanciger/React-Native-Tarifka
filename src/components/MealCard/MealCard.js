import React from "react";
import { View, ImageBackground, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./MealCard.style";

const MealCard = ({ meal, onPress }) => {

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} imageStyle={{ borderRadius: 10 }} source={{ uri: meal.strMealThumb }} />
        <View style={styles.inner_container}>
          <Text style={styles.text}>{truncate(meal.strMeal, 19)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;