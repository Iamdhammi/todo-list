import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import PropTypes from 'prop-types';


export default function Button({ image, text, buttonStyle, onPress, textStyle}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} onPress={onPress}>
            {
                image && 
                <Image 
                    source={image}
                    resizeMode="contain"
                    style={styles.buttonImage}
                />
            }
            <Text style={[styles.buttonText, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

Button.proptypes = {
    image: PropTypes.any,
    text: PropTypes.string.isRequired,
    buttonStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    textStyle: PropTypes.object
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        marginVertical: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20
    },
    buttonImage: {
        height: 20,
        width: 20
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        flex: 1,
        fontSize: 16,
        fontWeight: '600'
    }
})