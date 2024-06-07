import { Stack } from 'expo-router/stack';
export default function BusesLayout() {

    return <Stack  screenOptions={{
        headerStyle: {
            backgroundColor: '#dfe3ee',
        },
        headerTintColor: 'teal',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}>
        <Stack.Screen name="bus" options={{
            title: "Buses",
            headerShown:false
        }} />
        <Stack.Screen name="details" options={{
            title: "Bus Details",
            headerShown:false
        }} />
        
    </Stack> 
};
