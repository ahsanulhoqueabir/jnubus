import { Stack } from "expo-router";
import SettingMainPage from ".";

export default function SettingsLayout() {
    return <Stack  screenOptions={{
        headerStyle: {
            backgroundColor: '#dfe3ee',
        },
        headerTintColor: 'teal',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}>
        <Stack.Screen name="index" options={{
            title: "Settings",
            headerShown:false
        }} />
        <Stack.Screen name="faq" options={{
            title: "FAQ"
        }} />
    </Stack>
};
