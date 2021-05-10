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
    addToCardBorder: {
        backgroundColor: '#9F79FF',
        height: '42@s',
        borderRadius: 100,
        padding: '12@s',
        marginHorizontal: '5@s',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    star: {
        fontSize: '22@s',
        color: '#FBBA43'
    },
    stars: {
        flexDirection: 'row',
        paddingVertical: '10@s',
    },
    newArrivalDetails: {
        alignItems: 'center',
        borderColor: '#F6F8FE',
        borderWidth: 1,
        paddingVertical: '25@s',
        marginBottom: '50@s'
    },
    newArrivalText: {
        fontSize: '18@s',
        color: '#140C40',
    },
    newArrivalPrice: {
        fontSize: '15@s',
        color: '#444444'
    },
    addToCardBorderArr: {
        backgroundColor: '#ffffff',
        height: '42@s',
        borderRadius: 100,
        padding: '12@s',
        position: 'absolute',
        right: '20@s',
        top: '20@s',
    },
    logoContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '25@s',
        marginTop: '50@s',
        flexDirection: 'row',
    },

    hamburger: {
        flex: 1,
        fontSize: '44@s',
        color: '#9F79FF',
        textAlign: 'right',
    },

    inImgText: {
        flex: 1,
        color: "white",
        fontSize: '45@s',
        textAlign: "center",
        fontFamily: 'Ramaraja',
        lineHeight: '80@s',
    },
    searchIconBorder: {
        backgroundColor: 'white'
    },
    topArrivalHeader: {
        fontFamily: 'Ramaraja',
        fontSize: '34@s',
        color: '#1D2547',
        lineHeight: '45@s'
    },
    topArrivalHeadSection: {
        alignItems: 'center',
        paddingVertical: '20@s',
    }
});
