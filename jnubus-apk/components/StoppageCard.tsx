import { Image, Text, View } from "react-native";

export default function StoppageCard({bus,lf}: {bus: any, lf: any}) {
    const { time, point, upTime, downTime } = bus;
    

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 25,
      }}
    >
      <View>
        <View>
            <Text style={{ color: 'teal', fontSize: 20, fontWeight: 500, }}>
                      {point.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <Text>Up Time: {upTime || '06:40'}</Text>
          <Text>Down Time: {downTime || '06:20'} </Text>
        </View>
        <View>
          <Text>Last Stoppage: {lf}</Text>
        </View>
      </View>
     
    </View>
  );
};
