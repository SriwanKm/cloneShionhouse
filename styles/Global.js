import { ScaledSheet } from 'react-native-size-matters'


export const GlobalStyles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        height: '390@s',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: '40@s',
    },
    shopButton: {
        backgroundColor: '#9F79FF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10@s',
        paddingHorizontal: '18@s',
        borderRadius: 5,
        marginVertical: '45@s',
    },
    shopButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: '16@s',
        letterSpacing: 1,
    },

});
