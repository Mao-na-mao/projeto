import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaInicio from './screens/home'
import TelaLogin1 from './screens/login1'
import TelaLista1 from './screens/list1'
import TelaLogin2 from './screens/login2'
import TelaLista2 from './screens/list2'
import TelaRequest from './screens/request'
import TelaForget from './screens/forget'
import TelaAbout from './screens/about'
import TelaSignin from './screens/signin'
import TelaSignin1 from './screens/signin1'
import TelaSignin2 from './screens/signin2'
import TelaProjeto from './screens/projeto'

const Stack = createNativeStackNavigator();

export default function App(){

    return (

        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen  name="TelaInicio" component={TelaInicio}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaLista1"   component={TelaLista1}   options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaLogin1"  component={TelaLogin1}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen  name="TelaLista2" component={TelaLista2}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaLogin2"  component={TelaLogin2}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaRequest"  component={TelaRequest}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaForget"  component={TelaForget}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaAbout"  component={TelaAbout}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaSignin"  component={TelaSignin}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaSignin1"  component={TelaSignin1}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaSignin2"  component={TelaSignin2}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
                <Stack.Screen name="TelaProjeto"  component={TelaProjeto}  options={{
                    headerShown: false, title: '', headerTransparent: true}}
                />
            </Stack.Navigator>

        </NavigationContainer>

    );

}