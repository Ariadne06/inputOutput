import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="explore" options={{ title: 'Explore' }} />
    </Stack>
  ) 
};

export default _layout;