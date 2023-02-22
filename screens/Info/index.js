import { StyleSheet, View, Text } from "react-native";
import { MD3DarkTheme, Button } from "react-native-paper";

const InfoRoute = 'Info';

const DarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
    },
};

const InfoScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Praticar</Text>
            <Button>ASdf</Button>
        </View>
    );
};

export { InfoRoute };
export default InfoScreen;