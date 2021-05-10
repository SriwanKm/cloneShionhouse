import { ScaledSheet } from 'react-native-size-matters'


export const GlobalStyles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoText: {
        fontFamily: 'Ramaraja',
        fontSize: '34@s',
        color: '#1D2547',
        letterSpacing: 1.5,
    },
    s: {
        fontSize: '45@s'
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
    mainSection: {
        marginHorizontal: '25@s',
    },
    socialIcon: {
        fontSize: '18@s',
        color: "white",
    },
    iconBorder: {
        borderColor: 'white',
        borderWidth: 1,
        width: '42@s',
        height: '42@s',
        borderRadius: 100,
        padding: '12@s',
        marginHorizontal: '5@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        flexDirection: 'row',
        marginTop: '15@s',
        marginBottom: '50@s',

    },
});
