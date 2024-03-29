import { createStackNavigator } from "@react-navigation/stack";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";

import { Example, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type { ApplicationStackParamList } from "@/types/navigation";
export const containerRef =
  createNavigationContainerRef<ApplicationStackParamList>();
const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme} ref={containerRef}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
``;
