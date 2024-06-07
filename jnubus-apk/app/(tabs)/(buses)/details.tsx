import StoppageCard from "@/components/StoppageCard";
import Timeline from "@/components/Timeline";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function BusDetails() {
    const [up,setup] = useState(false)
    const route = useRoute();
    const stoppage = route.params?.bus?.route?.stoppage || [];
    const last = stoppage[stoppage.length - 1]?.point?.name;
    const first = stoppage[0]?.point?.name;
    const data = [...stoppage]
    const revstoppage = [...stoppage].reverse();
    return <ScrollView contentContainerStyle={styles.container}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            
        }}>    
            <TouchableHighlight accessibilityRole='button' style={[{
                backgroundColor: 'green'
            }, styles.btn]} onPress={() => {
                setup(false)

            }}>
                <Text style={{color:'white',fontWeight:500}}>
                    DOWN
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={[
                {
                    backgroundColor: 'red'
                }, styles.btn
            ]}
            onPress={() => {
                setup(true)
            }}
            >
                <Text style={{color:'white',fontWeight:500}}>
                   UP
                </Text>
            </TouchableHighlight>
        </View>
        {
            up ? <Timeline stoppage={ revstoppage} lf={first} /> : <Timeline stoppage={ stoppage} lf={last} />
     }
        
</ScrollView>
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  timeline: {
    position: "relative",
  },
  verticalLine: {
    position: "absolute",
    backgroundColor: "black",
    width: 2,
    height: "100%",
    left: 30,
    zIndex: -1,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 9,
    paddingLeft: 10,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  yearText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    },
    btn: {
        padding: 10,
        // paddingHorizontal: 50,
        width: '50%',
        textAlign:'center',
        alignItems: "center",
        justifyContent: "center",
        
  }
});