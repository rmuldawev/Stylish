import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Splash from '../screens/Login/Splash';
import SignIn from '../screens/Login/SingIn';
import SingUp from '../screens/Login/SingUp';
import ForgotPassword from '../screens/Login/ForgotPassword';

export type LoginStackParamList = {
  SignIn: undefined;
  Splash: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type AppStackScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'SignIn'
>;

const MainNavigator = () => {
  const Login = createNativeStackNavigator();

  return (
    <Login.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Login.Screen component={SignIn} name="SignIn" />
      <Login.Screen component={Splash} name="Splash" />
      <Login.Screen component={SingUp} name="SignUp" />
      <Login.Screen component={ForgotPassword} name="ForgotPassword" />
    </Login.Navigator>
  );
};

export default MainNavigator;
