// import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const SearchBusCard = (
    { bus,dropPoint }: { bus: any,dropPoint: any }
) => {
    const [busData,setBusData] = useState({})
    const getData = async () => {
        const response = await fetch(`https://jnubus.netlify.app/.netlify/functions/api/v1/bus/find/${bus._id}`);
        const data = await response.json();
        return data;
        
    }
    useEffect(() => {
        getData().then((data) => {
            setBusData(data)
        })
    },[])
    const navigation = useNavigation();
    const handlepress = () => {
    navigation.navigate('details', {bus: busData});
    
    };
    // console.log(busData);
    return <TouchableHighlight underlayColor="#cffff4" onPress={handlepress}>
      <View style={styles.card}>
        <View style={{ width: "70%", flexDirection: "column", gap: 10 }}>
          <Text>{bus.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="history" size={16} color="gray" />
              <Text>
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  UP :{" "}
                </Text>
                {bus.UP}
              </Text>
            </View>
            <Text>
              <Text style={{ color: "red", fontWeight: "bold" }}>DOWN : </Text>
              {bus.DOWN}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>
              <Text>Last Stoppage: </Text>
              {dropPoint}
            </Text>
          </View>
        </View>
        <View>
         
          {
            bus.decktype === 'single' ? (<Image style={{ width: 80, height: 60 }} source={require('../assets/images/singledecker.png')}/>) : (<Image style={{ width: 80, height: 60 }} source={require('../assets/images/doubledecker.png')}/>) 

          }
        </View>
      </View>
    </TouchableHighlight>

    
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 20,
    padding: 15,
    shadowColor: "teal",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
  },
});
export default SearchBusCard;