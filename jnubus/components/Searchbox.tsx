import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SearchBox = () => {
  const [data, setdata] = useState({
    start: "Jagannath University",
    end: "House Building",
  });
  const handleInput = (  point:string, value:string) => {
    setdata({ ...data, [point]: value });
  };
  return (
    <View
      style={{
        margin: 18,
      }}
    >
      <View>
        <TextInput
          value={data.start}
          style={styles.inputBox}
          onChangeText={(text) => handleInput("start", text)}
          placeholder="Start Point"
        />
        <TextInput
          value={data.end}
          onChangeText={(text) => handleInput("end", text)}
          style={styles.inputBox}
          placeholder="End Point"
        />
        <Button color="red" title="Search" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  inputBox: {
    padding: 7,
    paddingLeft: 10,
    width: 300,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "green",
  },
});

export default SearchBox;
