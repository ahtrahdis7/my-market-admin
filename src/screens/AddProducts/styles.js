import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  viewIn: {
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'monospace',
  },
  TextInput: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomColor: '#000000',
    borderRadius: 3,
    fontFamily: 'monospace',
  },
  heading: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

export default styles;
