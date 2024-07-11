import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Page() {
  const { comp_id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Comp Home {comp_id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
