import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import data from '../assets/data/stoppage.json'
import SearchBusCard from "./SearchBusCard";
// import { ScrollView } from "react-native-gesture-handler";

export interface item{
  _id: string,
  name: string,
  buses: object[]

}
const SearchBox = () => {
  let [loading, setloading] = useState(false)
  let [buses,setBuses]= useState([])
  let [allStoppage, setAllStoppage] = useState([])
  let [stoppage, setStoppage] = useState("")
  let names: string[] = [];
  const [sNames, setNames] = useState([])
  const stoppages = data.map(item => {
    const st = {
      name: item.name,
      bus: item.buses,
      id: item._id

    }
    return st;
  })
  
  // const getAPI = async () => {
  //   setloading(true)
  //   const response = await fetch("https://jnubus.netlify.app/.netlify/functions/api/v1/stoppage/all");
  //   const data = await response.json();

  //   return data;
  // }
  // useEffect(() => {
  //   const data = getAPI();
  //   data.then((data) => {
  //     setAllStoppage(data)
  //     setloading(false)
  //     data.map((item: any) => { 
  //       names.push(item.name)
  //     })
  //   })
  // }, [])

  
  // const [data, setdata] = useState({
  //   start: "Jagannath University",
  //   end: "House Building",
  // });
  // const handleInput = (  point:string, value:string) => {
  //   setdata({ ...data, [point]: value });
  //   console.log(data);
  // };
  const handleInput = (value: string) => {
    setStoppage(value)
  }
  const handleSearch = () => {
    setBuses([])
    data.map((item) => {
      if (item.name.toLowerCase().includes(stoppage.toLowerCase())) {
        let searchSt: any = [...buses];
        searchSt.push(item)
        setBuses(searchSt);
      }
    })
  }
    return ( <>
      <View
        style={styles.container}
      >
        <View style={{
          width: '80%',
        
        }}>
          <TextInput
            value={'Jagannath University'}
            style={[styles.inputBox, {
              color: "black"
            }]}
            placeholder="Start Point"
            editable={false}
         
          />
          <TextInput
            value={stoppage}
            onChangeText={(text) => handleInput(text)}
            style={styles.inputBox}
            placeholder="Stoppage Point"
          />
        </View>
        <TouchableHighlight onPress={handleSearch} style={
          styles.button
        }>
          <Text style={{
            color: 'white'
          }}>
            Search
          </Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
        {
          buses?.map((item: { name: string,buses :Object[] }, index) => {
            return (
              <View key={index}>
                {
                  item.buses?.map((bus: any, index: number) => (<SearchBusCard  key={index} bus={bus} dropPoint={item.name} />))
               }
              </View>
            )
          })
          }
      </ScrollView>
      </>
    );
  };

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
   
  },

  inputBox: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "green",
    width: '80%',
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,

  },
});

