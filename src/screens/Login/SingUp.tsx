import {useNavigation} from '@react-navigation/native';
import {Box, Container, HStack, Pressable, Text} from 'native-base';
import {AppStackScreenProps} from '../../navigation/MainNavigator';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, useForm} from 'react-hook-form';
import LoginTitle from '../../components/common/LoginTitle';
import TextInput from '../../components/TextInput/TextInput';
import CustomButton from '../../components/CustomButton';
import GoogleFacebookContinue from '../../components/Goggle&FacebookContinue/GoogleFacebookContinue';

const validationSchema = yup.object({
  name: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().min(8, 'Введите пароль').required(),
});

const SingUp = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: {isValid, errors},
    getValues,
  } = methods;

  return (
    <FormProvider {...methods}>
      <Box safeAreaTop pl={29} pr={29} bg={'#ffffff'} flex={1}>
        <LoginTitle
          text="Create an account"
          style={{marginBottom: 36, paddingTop: 19}}
        />
        <TextInput
          error={errors.name}
          name="email"
          type="login"
          placeholder="Username or Email"
          style={{marginBottom: 31}}
        />
        <TextInput
          error={errors.password}
          name="password"
          placeholder="Password"
          type="password"
          style={{marginBottom: 31}}
        />
        <TextInput
          error={errors.password}
          name="confirm"
          placeholder="Confirm Password"
          type="password"
          style={{marginBottom: 9}}
        />
        <Text fontSize={12} color={'#676767'} mb={38}>
          By clicking the{' '}
          <Pressable _pressed={{opacity: 0.5}} textAlign={'center'}>
            <Text color={'#FF4B26'} fontSize={12}>
              Register
            </Text>
          </Pressable>{' '}
          button, you agree to the public offer
        </Text>
        <CustomButton name="Create Account" />
        <GoogleFacebookContinue style={{marginTop: 40}} />
        <HStack justifyContent={'center'} mt={'29px'}>
          <Text>I Already Have an Account</Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text
              ml={'5px'}
              color={'#F83758'}
              textDecorationLine={'underline'}
              fontSize={'14px'}
              fontWeight={'600'}>
              Login
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </FormProvider>
  );
};

export default SingUp;
