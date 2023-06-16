
import { NavigationContainer } from '@react-navigation/native';
import MoviesPage from './src/pages/MoviesPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsPage from './src/pages/MoviesDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='MoviesPage' component={MoviesPage} options={{headerShown: false}} />
        <Stack.Screen name='MoviesDetailsPage' component={MovieDetailsPage}/>
      </Stack.Navigator>



    </NavigationContainer>


  );

}
