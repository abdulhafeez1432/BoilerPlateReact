import { Tabs } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default () => {
	return (
		<Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />}}>
			<Tabs.Screen
				name="home"
				options={{
					//tabBarLabel: 'List',
					//headerTitle: 'Home Screen',
					headerShown: false,
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="list" size={size} color={color} />
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: 'Account',
					headerTitle: 'My Account',
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />
				}}
			/>

			<Tabs.Screen
				name="list"
				options={{
					tabBarLabel: 'News',
					headerShown: false,
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="newspaper" size={size} color={color} />
				}}
			/>
		</Tabs>
	);
};



