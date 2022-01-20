import React from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./Meals.style";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import MealCard from "../../components/MealCard";

const Meals = ({ navigation, route }) => {
  const { loading, data, error } = useFetch(`${Config.API_URL}/filter.php?c=${route.params.category}`);

  const handleSelectMeal = (id) => {
    navigation.navigate("DetailsScreen", { id });
  }

  const renderMeal = ({ item }) => <MealCard meal={item} onPress={() => handleSelectMeal(item.idMeal)} />

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default Meals;