import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function rootLayout() {

  return (
<ThemeProvider value={DefaultTheme}>
<StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="registration" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: true }} />
      </Stack>
    </ThemeProvider>
  );
}
