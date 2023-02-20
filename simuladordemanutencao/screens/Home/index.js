import * as React from 'react'
import { View, StyleSheet, ScrollView } from "react-native";
import Swiper from 'react-native-swiper'

import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Text, Button, MD3DarkTheme } from "react-native-paper";


const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >

      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name='play-outline' color={DarkTheme.colors.primary}/>
        </View>
        <Text variant="headlineSmall" style={styles.headline}>Praticar</Text>
      </View>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg' }} />
        <Card.Actions style={styles.cardActions}>
          <Button mode='contained' style={styles.button}>Praticar</Button>
        </Card.Actions>
      </Card>

      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name='book-outline' color={DarkTheme.colors.primary}/>
        </View>
        <Text variant="headlineSmall" style={styles.headline}>Aprender</Text>
      </View>


      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        height={310}
        dotColor={DarkTheme.colors.onSurface}
        activeDotColor={DarkTheme.colors.inversePrimary}
        dotStyle={{borderRadius: 4}}
      >

        <Card style={styles.cardItem}>
          <Card.Cover source={{ uri: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
          <Card.Actions style={styles.cardActions}>
            <Button mode='contained-tonal' style={styles.button}>Estudar</Button>
          </Card.Actions>
        </Card>


        <Card style={styles.cardItem}>
          <Card.Cover source={{ uri: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
          <Card.Actions style={styles.cardActions}>
            <Button mode='contained-tonal' style={styles.button}>Estudar</Button>
          </Card.Actions>
        </Card>


        <Card style={styles.cardItem}>
          <Card.Cover source={{ uri: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
          <Card.Actions style={styles.cardActions}>
            <Button mode='contained-tonal' style={styles.button}>Estudar</Button>
          </Card.Actions>
        </Card>

      </Swiper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 8
  },
  iconContainer: {
    backgroundColor: DarkTheme.colors.primaryContainer,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 3
  },
  icon: {
    fontSize: 22,
    padding: 0,
    marginLeft: 1
  },
  headline: {
    fontWeight: '700',
    marginLeft: 8
  },
  card: {
    width: "100%",
    padding: 8,
    marginBottom: 12,
  },
  cardActions: {
    paddingHorizontal: 0,
    paddingTop: 8,
    paddingBottom: 0
  },
  cardItem: {
    width: "100%",
    padding: 8,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    borderRadius: 8,
  },
  wraper: {
    flex: 1
  }
});

export default HomeScreen;