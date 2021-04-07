import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { lightThemeColor, themeColor } from '../utlis/constants';
import TaskForm from '../components/TaskForm';
import BottomSheet from '../components/BottomSheet'
import PropTypes from 'prop-types';

export default function Footer({ active }) {
    const [openBottomSheet, setOpenBottomSheet] = React.useState(false);
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity>
                    <SimpleLineIcons 
                        name="home" 
                        style={[styles.icons, active === 'home' && {color: themeColor}]} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpenBottomSheet(true)}>
                    <AntDesign name="plussquare" style={styles.addIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons 
                        name="settings" 
                        style={[styles.icons, active === 'settings' && {color: themeColor}]} 
                    />
                </TouchableOpacity>
            </View>
            <BottomSheet open={openBottomSheet} setOpen={setOpenBottomSheet}>
                <TaskForm setOpenBottomSheet={setOpenBottomSheet}/>
            </BottomSheet>
        </View>
    )
}

Footer.proptypes = {
    active: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingVertical: 30
    },
    icons: {   
        fontSize: 20,
        color: '#555'
    },
    addIcon: {
        fontSize: 45,
        color: lightThemeColor,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})