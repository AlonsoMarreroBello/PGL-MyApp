import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>
          Esta es la app de un pibe que: {"\n"} - Tiene Pelo{"\n"} - Tiene
          Gracia{"\n"} - Es Guapo{"\n"} - No Tiene Abuela{"\n"}
        </Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("..\\assets\\imgs\\a-portfolio-of-funny-stock-market-memes-for-people-who-have-no-idea-what-dividends-are.jpg")}
        />
        <Pressable style={styles.pressable}>
          <Text style={styles.pressableText}>Botón</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    alignSelf: "center",
    backgroundColor: "#D32F2F",
    padding: 5,
    borderRadius: 5,
  },
  mainText: {
    fontSize: 25,
  },
  pressableText: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
