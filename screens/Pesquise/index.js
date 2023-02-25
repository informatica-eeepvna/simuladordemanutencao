import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import DarkTheme from '../../assets/themes/DarkTheme';

const PesquiseRoute = 'Pesquise';


const PesquiseScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Pesquisar</Text>
            <Button
                title="Home"
            />
        </View>
    );
};

export { PesquiseRoute };
export default PesquiseScreen;