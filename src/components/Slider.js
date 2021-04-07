import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { lightThemeColor } from '../utlis/constants';
import { sliderData } from '../data/index.data';


const Slider = () => {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const sliderWidth = viewportWidth;

    const [activeSlide, setActiveSlide] = React.useState(0);

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.itemContainer} key={index}>
                <Image source={item.image} resizeMode="contain" style={styles.itemImage} />
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Carousel
                ref={(c) => Carousel._carousel = c}
                data={sliderData}
                renderItem={_renderItem}
                sliderWidth={viewportWidth}
                itemWidth={sliderWidth }
                activeSlideAlignment={"start"}
                slideStyle={{marginLeft: 7, marginBottom: 10}}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination 
                dotsLength={sliderData.length}
                activeDotIndex={activeSlide}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.inactiveDotStyle}
            />
        </View>
    )
}

export default Slider;

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    itemImage: {
        height: 250,
        width: 250
    },
    itemTextContainer: {
        marginTop: 10
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '300',
        marginTop: 20
    },
    dotStyle: {
        backgroundColor: lightThemeColor
    },
    inactiveDotStyle: {
        backgroundColor: '#000'
    }
})