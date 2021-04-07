import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { ceil } from 'react-native-reanimated';
import Carousel from 'react-native-snap-carousel';
import { lightThemeColor, themeColor, thinColor } from '../utlis/constants';
import { headerData } from '../data/index.data';
import PropTypes from 'prop-types';

export default function Header({ activeSlide, setActiveSlide}) {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const sliderWidth = viewportWidth/3;

    const _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                style={[styles.itemTextContainer, activeSlide !== index && { backgroundColor: thinColor}]} 
                key={index}
                onPress={() => { Carousel._carousel.snapToItem(index); }}
            >
                <Text style={[styles.itemTitle, activeSlide !== index && { color: '#000'}]} >{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerInfoContainer}>
                <View>
                    <Text style={styles.title}>Hello,</Text>
                    <Text style={styles.boldTitle}>Abdur Rahman</Text>
                </View>
                <Image source={require('../images/user.png')} resizeMode="contain" style={styles.headerImage} />
            </View>
            <View>
                <Carousel
                    ref={(c) => Carousel._carousel = c}
                    data={headerData}
                    renderItem={_renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={sliderWidth }
                    activeSlideAlignment={"start"}
                    slideStyle={{marginLeft: 7, marginBottom: 10}}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
            </View>
        </View>
    );
}

Header.proptypes = {
    activeSlide: PropTypes.number.isRequired,
    setActiveSlide: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    headerInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    headerImage: {
        height: 50,
        width: 50,
        borderRadius: 20
    },
    title: {
        fontSize: 26
    },
    boldTitle: {
        fontSize: 26,
        fontWeight: '800'
    },
    itemTextContainer: {
        backgroundColor: themeColor,
        paddingVertical: 20,
        borderRadius: 10
    },
    itemTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    }
})