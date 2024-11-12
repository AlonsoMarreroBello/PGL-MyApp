import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { thingsILikeALot as favouriteThings } from "../../../data/thingsILikeALot";
import Card from "../../../components/card/Card";
import RandomQuote from "../../../components/randomQuote/RandoQuote";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <RandomQuote isDarkTheme={false} />
      <Text style={styles.favoriteThingsTitle}>cosas que me gustan mucho:</Text>
      <ScrollView style={styles.favouriteThingScrollView}>
        {favouriteThings.map((thing, index) => (
          <Card
            key={index}
            textString={thing}
            style={styles.favoriteThingsText}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  favoriteThingsTitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  favouriteThingScrollView: {
    padding: 10,
  },
  favoriteThingsText: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "lightgray",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "lightgray",
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileDescription: {
    color: "gray",
  },
  likesTitle: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  likeItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  repositoryContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  repositoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  repositoryImage: {
    width: 150,
    height: 150,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  repositoryQR: {
    width: "100%",
    height: "100%",
  },
});
