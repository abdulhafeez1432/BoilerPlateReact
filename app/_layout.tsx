// import { Stack, useRouter } from 'expo-router';
// import { Button } from 'react-native';

// const StackLayout = () => {
// 	const router = useRouter();

// 	return (
// 		<Stack
// 			screenOptions={{
// 				headerStyle: {
// 					backgroundColor: '#10101E'
// 				},
// 				headerTintColor: '#fff',
// 				headerTitleStyle: {
// 					fontWeight: 'bold'
// 				}
// 			}}
// 		>
// 			<Stack.Screen name="index" options={{ headerTitle: 'Login', headerShown: false }} />
// 			<Stack.Screen
// 				name="modal"
// 				options={{
// 				presentation: 'modal',
// 				headerLeft: () => <Button title="Close" onPress={() => router.back()} />
//         		}}
//       		/>

// 			<Stack.Screen
// 					name="(tabs)"
// 					options={{
// 					headerShown: false,
// 					}}
// 				/>

				
    
// 		</Stack>
// 	);
// };

// export default StackLayout;




import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => <Button onPress={() => {router.push('contact')}} title="Contact" />,
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen name="contact" options={{ headerTitle: "Contact", presentation: 'modal' }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}