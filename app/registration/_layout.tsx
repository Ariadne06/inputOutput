import { Stack } from "expo-router";

export default function registrationLayout(){
  return (
    <Stack>
      <Stack.Screen name="registrationScreen" options={{ headerShown: false }} />
    </Stack>
  )
}