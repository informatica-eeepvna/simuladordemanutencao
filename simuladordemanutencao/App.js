import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.navLogo}>
          <Image style={styles.navIcon} source={require("./assets/icons/logo.svg")} />
          <Text style={styles.navName}>App</Text>
          <StatusBar></StatusBar>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#171718',
    color: '#ffffff',
    justifyContent: 'center',
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202123",
    borderBottomWidth: 2,
    borderBottomColor: "#31363D",
    flex: 1,
    height: 64,
    top: 0,
  },
  navLogo: {
    width: 32,
    height: 32,
  }
});
