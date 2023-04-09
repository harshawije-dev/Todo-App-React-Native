import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TaskScreen from "./src/screens/TaskScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerBackVisible: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
