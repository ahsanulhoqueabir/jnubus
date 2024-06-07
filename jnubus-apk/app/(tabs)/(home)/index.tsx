import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import SearchBox from '@/components/Searchbox';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SearchBox from '@/components/Searchbox';
import { Stack } from 'expo-router';
const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='details' />
    </Stack>
  )
}
export default function HomeScreen() {
  const {top} = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={
       styles.container
     }>
      <StatusBar backgroundColor='white'
        style="dark"
        translucent={true}

      />

      <ThemedView>
        <SearchBox/>
      </ThemedView>
     
     </SafeAreaProvider>
    // <SearchLayout/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
  }
  
 
});
