import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
  const compIds = [1, 2, 3, 4, 5];
  return (
    <View>
      <Text>Comp List</Text>
      {compIds.map((compId) => (
        <Link key={compId} href={`/comps/${compId}(tabs)`} asChild>
          <Pressable>
            <Text>Comp {compId}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
