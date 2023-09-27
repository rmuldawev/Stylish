import {Box, Container, Text} from 'native-base';
import LoginTitle from '../../components/common/LoginTitle';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigation/MainNavigator';
import {FormProvider, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import TextInput from '../../components/TextInput/TextInput';
import CustomButton from '../../components/CustomButton';

const validationSchema = yup.object({
  name: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().min(8, 'Введите пароль').required(),
});

const ForgotPassword = () => {
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
          text="Forgot password?"
          style={{marginBottom: 32, paddingTop: 19}}
        />
        <TextInput
          type="email"
          error={errors.name}
          name="email"
          placeholder="Enter your email address"
          style={{marginBottom: 26}}
        />
        <Text color={'#676767'} fontSize={12}>
          <Text color={'#F83758'}>*</Text> We will send you a message to set or
          reset your new password
        </Text>

        <CustomButton
          name="Submit"
          style={{marginTop: 26}}
          onPress={() => navigation.navigate('SignIn')}
        />
      </Box>
    </FormProvider>
  );
};

export default ForgotPassword;
