import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import DarkTheme from "../../assets/themes/DarkTheme";
import React from "react";

const PratiqueRoute = 'Pratique';

const Stack = createStackNavigator();

const InitialPage = () => {
  return (
		<View style={styles.container}>
			<Icon color={DarkTheme.colors.primary} style={styles.icon} name="play" />
			<Text style={styles.header} variant="headlineSmall">Teste seu Conhecimento</Text>
      <Text variant="bodyMedium" style={styles.content}>Cada questão valerá um número N de CPUs, dos quais será feita uma média no final indicando sua afinidade com o conteúdo. Boa sorte!</Text>
      <View style={styles.content}>
        <Icon 
          color={DarkTheme.colors.primary}
          style={{fontSize: 22, marginRight: 4}}
          name="hardware-chip-outline" 
        />
        <Text>CPUs coletadas:</Text>
        <Text style={{marginLeft: 4, color: DarkTheme.colors.primary}}>123</Text>
      </View>
			<View style={styles.btnContainer}>
				<Button mode="contained" style={styles.button}>Iniciar</Button>
				<Button mode="contained-tonal" style={styles.button}>Resetar</Button>
			</View>
		</View>
	);
}


const PratiqueScreen = ({ navigation }) => {
	return (
    <NavigationContainer theme={DarkTheme} independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={PratiqueRoute}>
          {props => <InitialPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		fontSize: 96,
	},
	header: {
		fontWeight: "700",
		letterSpacing: -1,
    color: DarkTheme.colors.primary,
    fontWeight: "900",
    marginTop: 16
	},
  content: {
    padding: 26,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    flexDirection: "row",
    padding: 26,
    paddingVertical: 12
  },
	button: {
		flex: 1,
    marginHorizontal: 4
	},
})

export { PratiqueRoute };
export default PratiqueScreen;