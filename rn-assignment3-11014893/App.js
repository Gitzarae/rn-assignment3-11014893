import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const categories = [
    { key: "Category 1" },
    { key: "Category 2" },
    { key: "Category 3" },
    { key: "Category 4" },
  ];

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
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text>{item.key}</Text>
          </View>
        )}
      />
      <Text style={styles.texttt}>Ongoing Task</Text>
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
    width: "92%",
    backgroundColor: "pink",
    paddingHorizontal: 2,
    marginTop: 100,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
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
    marginLeft: -335,
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
    width: "92%",
    marginBottom: 20,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangle1: {
    backgroundColor: "white",
    opacity: 0.4,
    width: 280,
    height: 70,
    borderRadius: 20,
    marginLeft: "",
  },
  rectangle2: {
    backgroundColor: "white",
    opacity: 0.4,
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 2,
  },
  textt: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: -225,
  },
  category: {
    backgroundColor: "pink",
    width: 220,
    height: 250,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 20,
  },
  texttt: {

  },
});
