import React from 'react';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
} from 'react-native';
import Slider from '../components/Slider';
import Button from '../components/Button';

const buttonData = [
    {
        image: require('../images/facebook.png'),
        text: 'Continue with Facebook'
    },
    {
        image: require('../images/google.png'),
        text: 'Continue with Google'
    },
    {
        image: require('../images/email.png'),
        text: 'Continue with email'
    },
]
 
const Index = ({ navigation }) => {
   return (
     <SafeAreaView style={styles.safeviewContainer}>
       <StatusBar barStyle={'dark-content'} />
       <View style={styles.container}>
           <Slider />
       </View>
       <View style={styles.buttonSection}>
           {
               buttonData.map((item, index) => (
                    <Button 
                        key={index} 
                        image={item.image} 
                        text={item.text}
                        buttonStyle={index === 2 && styles.buttonStyle}
                        onPress={() => navigation.navigate('Home')}
                    />
               ))
           }
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
    safeviewContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },  
    container: {
        flex: 0.9,
        justifyContent: 'center',
    },
    buttonSection: {
        marginHorizontal: 20
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee'
    }
 });
 
 export default Index;
 