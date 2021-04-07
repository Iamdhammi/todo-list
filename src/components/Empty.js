import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

export default function Empty({ text }) {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../images/empty.png')}
                resizeMode="contain"
                style={styles.image}
            />
            <Text>{text}</Text>
        </View>
    )
}

Empty.proptypes = {
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 120
    }
})