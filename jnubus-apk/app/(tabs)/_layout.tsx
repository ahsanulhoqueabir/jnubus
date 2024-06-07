import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='details' />
    </Stack>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {top} = useSafeAreaInsets()

  return (
    <Tabs
      sceneContainerStyle={{
        paddingTop: top+10,
      
      }}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'home-outline'} color={color} />
          ),
        }}
      />
     
      <Tabs.Screen
        name="(buses)"
        options={{
          title: 'Buses',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'bus-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
})