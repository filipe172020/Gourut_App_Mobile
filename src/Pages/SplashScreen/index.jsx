import React from "react";
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {

    //Função de navegação//
    const navigation = useNavigation();

    return(

        <View style={styles.containerGeralSplash}>

            <LottieView 
            source={require('')}
            autoPlay
            loop={false}
            onAnimationFinish={() => navigation.navigate('BottomSheet', { screen: 'Login' })}
            />

            <Animatable.View delay={2300} animation="tada" style={styles.logoSerodonto}>
            <Image
                    style={{ width: '70%' }}
                    resizeMode='contain'
                    source={require('')}
                />
            </Animatable.View>

            <StatusBar backgroundColor='#61c2a1' barStyle='light-content' />
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerGeralSplash: {
        flex: 1,
        backgroundColor: '#61c2a1'
    }
})