import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Config from "react-native-config";
import styles from "./Categories.style";

import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import CategoryCard from "../../components/CategoryCard";

const Categories = ({ navigation }) => {
  const { loading, data, error } = useFetch(`${Config.API_URL}/categories.php`);

  const handleSelectCategory = (category) => {
    navigation.navigate("MealsScreen", { category });
  }

  const categoryRender = ({ item }) => <CategoryCard category={item} onPress={() => handleSelectCategory(item.strCategory)} />

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={categoryRender}
      />
    </View>
  );
}

export default Categories;