import { Link, useRouter } from 'expo-router';
import { View, Pressable, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';


const LoginPage = () => {
	const navigation = useNavigation();
	const router = useRouter();

	const openDrawer = ()=>{
		navigation.dispatch(DrawerActions.openDrawer())
	}

	const handleLogin = () => {
		// Add your login logic here
		router.replace('/home');
	};

	return (

		
		

		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Pressable onPress={handleLogin}>
				<Text>Login</Text>
			</Pressable>

			<Link href={'/home'} asChild>
				<Button title='Go to Blog Page' />
			</Link>

			<Link href="/register" asChild>
				<Pressable>
					<Text>Create account</Text>
				</Pressable>
			</Link>

			<Link href="/test">Unmatched route</Link>


			<Text style={{fontSize:30}}>Welcome to our app</Text>
			<Link href={'/about'}>
				<Text style={{fontSize:18}}>Go to About Page</Text>
			</Link>
			<Link href={'/blog'} asChild>
				<Button title='Go to Blog Page' />
			</Link>
			<Link href={'/contact'} asChild>
				<Button title='Go to Contact Page' />
			</Link>

			
			
		</View>
	);
};

export default LoginPage;