import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  wrapper: {},
  label: {
    // marginBottom: spaces.baseSpace,
  },
  inputWrapper: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 16,
    // fontFamily: typography.heading,
  },
  errorIcon: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  errorText: {
    marginLeft: 9.33,
    fontSize: 12,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  showPasswordButton: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  valid: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  limitText: {
    textAlign: 'right',
  },
})

export default styles
