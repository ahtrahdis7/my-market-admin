import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    // backgroundColor: "#8400ff"
  },
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    // justifyContent: 'center',
    // marginHorizontal: 16,
    // paddingTop:250,
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
  },
  button: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 200,
  },
  admin: {
    borderBottomColor: '#000000',
    fontSize: 25,
    textAlign: 'center',
    // paddingBottom: 50,
    // fontStyle: 'italic',
    fontFamily: 'monospace',
    marginTop: 20,
  },
  logo: {
    marginTop: 20,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    // borderRadius: 200,
  },
});

export default styles;
