import 'react-native-gesture-handler';
import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button,
    Dimensions
} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import Footer from "./Footer";
import {Video} from 'expo-av';
import {useEffect, useState} from "react";


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function Contact({navigation}) {
    const [dimensions, setDimensions] = useState({window, screen});
    const onChange = ({window, screen}) => {
        setDimensions({window, screen});
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    const isPortrait = () => {
        return dimensions.screen.height > dimensions.screen.width
    }

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={GlobalStyles.container}>


            <ScrollView>
                <View style={GlobalStyles.logoContainer}>
                    <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>S</Text>HION HOUSE</Text>

                    <Ionicons
                        style={GlobalStyles.hamburger}
                        onPress={() => navigation.toggleDrawer()}
                        name="ios-menu-sharp"/>
                </View>

                <View style={GlobalStyles.navBand}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}>

                        <Text style={GlobalStyles.navBandText}>Home</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.navBandText}>&#x3e;</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contact')}>
                        <Text style={GlobalStyles.navBandText}>Contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.mainSection}>
                    <View>
                        <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>G</Text>ET IN <Text
                            style={GlobalStyles.s}>T</Text>OUCH
                        </Text>


                        <Video
                            ref={video}
                            style={isPortrait() ? styles.video : styles.videoL}
                            source={{
                                uri: 'https://player.vimeo.com/external/529682809.sd.mp4?s=97f15bc483ae0d2c5d1ae59b87820e99824be3e0&amp;profile_id=164&amp;oauth2_token_id=57447761',
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.buttons}>
                            <Button
                                title={status.isPlaying ? 'Pause' : 'Play'}
                                onPress={() =>
                                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                                }
                            />
                        </View>



                        <TextInput
                            placeholder='Enter Message'
                            style={[styles.messageInput, styles.messageMessageInput]}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Enter your name'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Email'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Enter Subject'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={GlobalStyles.sendButton}>
                            <Text
                                style={[GlobalStyles.browseMoreButtonText, {fontFamily: 'ShipporMinchoB1'}]}>SEND</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom: 50}}>
                        <View style={styles.contactDetailContainer}>
                            <AntDesign name="home" style={styles.contactDetailIcon}/>
                            <View>
                                <Text style={styles.contactDetailText1}>BUTTONWOOD, CALIFORNIA.</Text>
                                <Text style={styles.contactDetailText2}>Rosemead, CA 91770</Text>
                            </View>
                        </View>
                        <View style={styles.contactDetailContainer}>
                            <MaterialCommunityIcons name="tablet-ipad" style={styles.contactDetailIcon}/>
                            <View>
                                <Text style={[styles.contactDetailText1, styles.contactDetailPhoneText]}>+1 253 565 2365</Text>
                                <Text style={styles.contactDetailText2}>Mon to Fri 9am to 6pm</Text>
                            </View>
                        </View>
                        <View style={styles.contactDetailContainer}>
                            <Feather name="mail" style={styles.contactDetailIcon}/>
                            <View>
                                <Text style={styles.contactDetailText1}>SUPPORT@COLORLIB.COM</Text>
                                <Text style={styles.contactDetailText2}>Send us your query anytime!</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create(
    {
        aboutDetails: {
            textAlign: 'center',
            color: '#646D77',
            fontSize: '16@s',
            lineHeight: '25@s',
            paddingBottom: '28@s',
        },
        messageInput: {
            borderColor: '#E5E6E9',
            borderWidth: 1,
            height: '55@s',
            paddingLeft: '20@s',
            marginVertical: '12@s',
            fontSize: '14@s'
        },
        messageMessageInput: {
            height: '150@s',
        },
        contactDetailIcon: {
            fontSize: '30@s',
            marginRight: '18@s',
            color:'#8A8A8A'
        },
        contactDetailText1: {
            fontFamily: 'ShipporMinchoB1',
            fontSize: '14@s',
        },
        contactDetailText2: {
            fontSize: '14@s',
            color:'#8A8A8A'
        },
        contactDetailPhoneText: {
            fontSize: '16@s',
            letterSpacing: '1@s'
        },
        contactDetailContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '18@s',
        },
        video: {
            alignSelf: 'center',
            width: '340@s',
            height: '180@s',
        },
        videoL: {
            alignSelf: 'center',
            width: '640@s',
            height: '338@s',
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)


