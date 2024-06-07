import { FlatList, StyleSheet, Text, View } from "react-native";
import StoppageCard from "./StoppageCard";

export default function Timeline({stoppage,lf}) {
    return  <View style={styles.timeline}>
        <View style={styles.verticalLine} />
        <FlatList
          data={ stoppage }
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.timelineItem
              ]}
            >
              <View
                style={[
                  styles.circle
                ]}
              >
                <Text style={styles.yearText}>{item.uptime}</Text>
              </View>
              <View style={styles.content}>
                <StoppageCard bus={item} lf= {lf}  />
              </View>
            </View>
          )}
        />
      </View>
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