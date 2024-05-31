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
            title: "Buses"
        }} />
        <Stack.Screen name="details" options={{
            title: "Bus Details"
        }} />
        
    </Stack> 
};
