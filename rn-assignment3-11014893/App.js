import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <Text style={styles.text1}>Hello , Devs</Text>
        <Text style={styles.text2}>14 Tasks today</Text>
        <View style={styles.round}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.rectangle1}></View>
        <View style={styles.rectangle2}></View>
      </View>
      <Text style={styles.textt}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flexDirection: "row",
    height: "",
    width: "90%",
    backgroundColor: "pink",
    paddingHorizontal: 2,
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "",
  },
  text1: {
    fontSize: 40,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 50,
  },
  text2: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 20,
    marginLeft: -330,
  },
  round: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    opacity: 0.4,
    borderRadius: 40,
    marginLeft: 100,
  },
  container2: {
    flexDirection: "row",
    height: "10%",
    width: "90%",
    marginBottom: "",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "",
  },
  rectangle1: {
    backgroundColor: "green",
    width: 280,
    height: 70,
    borderRadius: 20,
    marginLeft: 2,
  },
  rectangle2: {
    backgroundColor: "green",
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 2,
  },
  textt: {
    fontSize: "30px",
    marginTop: 50,
    marginBottom: 520,
    marginLeft:-225,
  },
});
