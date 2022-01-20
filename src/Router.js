import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";

const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={Categories} options={{
          title: "Categories",
          headerTitleStyle: { color: "rgb(242,169,59)" }
        }} />
        <Stack.Screen name="MealsScreen" component={Meals} options={{
          title: "Meals",
          headerTitleStyle: { color: "rgb(242,169,59)" },
          headerTintColor: "rgb(242,169,59)"
        }} />
        <Stack.Screen name="DetailsScreen" component={Details} options={{
          title: "Detail",
          headerTitleStyle: { color: "rgb(242,169,59)" },
          headerTintColor: "rgb(242,169,59)"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;