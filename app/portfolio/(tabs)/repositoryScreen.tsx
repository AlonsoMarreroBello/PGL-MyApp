import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

function RepositoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.repositoryContainer}>
        <Text style={styles.repositoryTitle}>Mi repositorio</Text>
        <View style={styles.repositoryImage}>
          <QRCode value="https://github.com/AlonsoMarreroBello" />
        </View>
      </View>
    </View>
  );
}

export default RepositoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
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
    justifyContent: "center",
    alignItems: "center",
  },
  repositoryQR: {
    width: "100%",
    height: "100%",
  },
});
