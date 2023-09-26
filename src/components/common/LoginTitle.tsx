import {Box, Text} from 'native-base';
import {FC} from 'react';
import {ViewStyle} from 'react-native';

interface LoginTitleProps {
  text: string;
  style?: ViewStyle;
}

const LoginTitle: FC<LoginTitleProps> = ({text, style}) => {
  return (
    <Box flexShrink={0} style={style}>
      <Text
        maxWidth={200}
        color={'#000'}
        fontFamily={'Montserrat'}
        fontSize={36}
        fontStyle={'normal'}
        fontWeight={700}
        lineHeight={43}>
        {text}
      </Text>
    </Box>
  );
};

export default LoginTitle;
