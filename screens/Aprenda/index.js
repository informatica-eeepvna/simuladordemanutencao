import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const AprendaRoute = 'Aprenda';

const AprendaScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Aprender</Text>
            <Button
                title="Home"
            />
        </View>
    );
};

export { AprendaRoute };
export default AprendaScreen;