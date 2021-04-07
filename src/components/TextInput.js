import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { thinColor } from '../utlis/constants';
import PropTypes from 'prop-types';

const Input = ({
    placeholder,
    keyboardType,
    value,
    onChangeText,
    autoFocus,
    disabled,
    multiline,
    secureTextEntry
}) => {
    return (
        <TextInput 
            placeholder={placeholder}
            keyboardType={keyboardType || 'default'}
            style={styles.inputStyle}
            placeholderTextColor={'#888'}
            value={value}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            disabled={disabled}
            multiline={multiline}
            textAlignVertical="top"
            secureTextEntry={secureTextEntry}
        />
    )
}

Input.proptypes = {
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    value: PropTypes.any.isRequired,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    textAlignVertical: PropTypes.string,
    secureTextEntry: PropTypes.bool
}

export default Input;

const styles = StyleSheet.create({
    inputStyle: {
        // fontFamily: 'Sansation',
        fontSize: 14,
        height: 45,
        backgroundColor: thinColor,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 10
    },
});