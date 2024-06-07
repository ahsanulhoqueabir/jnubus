import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const BusCard = ({ bus }: { bus: any }) => {
  const navigation = useNavigation();
  const dropPoint =
    bus.route.stoppage[bus.route.stoppage.length - 1].point.name;
  const handlepress = () => {
    navigation.navigate('details', {bus: bus});
    
  };
  return (
    
    <TouchableHighlight underlayColor="#cffff4" onPress={handlepress}>
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
          {/* <Image
            source={{
              uri:
                bus.decktype === "single"
                  ? "https://i.ibb.co/Vq83VHg/ec49011b26aa0c712f306aa60b8815d3.png"
                  : "https://i.ibb.co/Fb60FM8/d24cc68e858835d3c3224f80cea65f13.png",
            }}
            style={{ width: 80, height: 60 }}
          /> */}
          {
            bus.decktype === 'single' ? (<Image style={{ width: 80, height: 60 }} source={require('../assets/images/singledecker.png')}/>) : (<Image style={{ width: 80, height: 60 }} source={require('../assets/images/doubledecker.png')}/>) 

          }
        </View>
      </View>
    </TouchableHighlight>
  );
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
export default BusCard;