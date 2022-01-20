import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, Linking } from "react-native";
import styles from "./Details.style";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const Details = ({ route }) => {
  const { loading, data, error } = useFetch(`${Config.API_URL}/lookup.php?i=${route.params.id}`);

  const pressYoutube = () => {
    Linking.openURL(data.meals[0].strYoutube)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.area}>{data.meals[0].strArea}</Text>
      </View>
      <Text style={styles.details}>{data.meals[0].strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={pressYoutube}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Details;