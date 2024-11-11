import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>My App</Text>
      </View>
      <View>
        <Text>
          Esta es la app de un pibe que: {"\n"} - Tiene Pelo{"\n"} - Tiene
          Gracia{"\n"} - Es Guapo{"\n"} - No Tiene Abuela{"\n"}
        </Text>
        <Pressable style={styles.pressable}>
          <Text>Botón</Text>
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
});
