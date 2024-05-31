import React, { useState, useEffect } from "react";
import { ThemedView } from '@/components/ThemedView';

import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BusCard from "@/components/BusCard";



export default function Buses() {
    const [up, setup] = useState(true);
    const [busData, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const callAPI = async () => {
        const response = await fetch(
            "https://jnubus.netlify.app/.netlify/functions/api/v1/bus/all"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <SafeAreaProvider >
            <ScrollView>
                <ThemedView style={styles.container}>
                    {loading ? (
                        <ActivityIndicator size={"large"} style={ styles.loader} color={"teal"} />
                    ) : (
                        busData.map((bus: any) => <BusCard key={bus._id} bus={bus} />)
                    )}
                </ThemedView>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
