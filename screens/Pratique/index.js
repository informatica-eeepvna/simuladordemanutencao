import { StyleSheet, View, Text } from "react-native";
import { MD3DarkTheme, Button } from "react-native-paper";

const PratiqueRoute = 'Pratique';

const DarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
    },
};

const PratiqueScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Praticar</Text>
            <Button>ASdf</Button>
        </View>
    );
};

export { PratiqueRoute };
export default PratiqueScreen;