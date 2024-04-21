import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';



const HomePage = () => {

	const navigation = useNavigation();
	const router = useRouter();

	const openDrawer = ()=>{
		navigation.dispatch(DrawerActions.openDrawer())
	}

	
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>HomePage</Text>
			<Button title="open drawer" onPress={openDrawer}/>
		</View>
	);
};

export default HomePage;