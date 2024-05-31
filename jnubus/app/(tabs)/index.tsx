import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchBox from '@/components/Searchbox';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={
       styles.container
     }>

      <ThemedView>
        <SearchBox/>
      </ThemedView>
      <ThemedView>
        <ThemedText style={{textAlign: 'center', fontSize: 20, margin: 10}}>Welcome to the Home Screen</ThemedText>
       
      </ThemedView>
     </SafeAreaProvider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  }
  
 
});
