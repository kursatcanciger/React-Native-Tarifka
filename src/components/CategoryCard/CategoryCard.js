import React from "react";
import { TouchableWithoutFeedback, View, Image, Text } from "react-native";
import styles from "./CategoryCard.style";

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
        <Text style={styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;