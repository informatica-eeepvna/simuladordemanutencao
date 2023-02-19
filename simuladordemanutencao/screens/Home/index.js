import * as React from 'react'
import { View, StatusBar, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Text, Button, MD3DarkTheme} from "react-native-paper";

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Icon style={styles.icon} name='play-outline' color={DarkTheme.colors.primary}/>
        <Text variant="headlineSmall" style={styles.headline}>Praticar</Text>
      </View>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg' }} />
        <Card.Actions style={styles.cardActions}>
          <Button mode='contained' style={styles.button}>Praticar</Button>
        </Card.Actions>
      </Card>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headline: {
    fontWeight: '700',
    marginLeft: 8
  },
  card: {
    padding: 8
  },
  cardActions: {
    paddingHorizontal: 0,
    paddingTop: 8,
    paddingBottom: 0
  },
  button: {
    width: "100%",
    borderRadius: 8,
  },
  icon: {
    fontSize: 26,
    backgroundColor: DarkTheme.colors.primaryContainer,
    borderRadius: 6,
    padding: 4
  }
});

export default HomeScreen;