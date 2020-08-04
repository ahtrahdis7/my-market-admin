import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
    photo: {
        width: (SCREEN_WIDTH - (2 + 1) * 20) / 2,
        height: 150,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // alignItems: 'center',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        margin: 10,
        borderColor: '#545454',
        borderWidth: 0.5,
        borderRadius: 20,
        borderStyle: 'solid',
        marginRight: 20,
        marginLeft: 20,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: '#545454',
        height: 20,
    },
    textSection: {
        padding: 5,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
