import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {THEME_COLOR, WHITE} from '../../utils/Colors';

const DATA = [
  {
    title: 'Browse Professional Content',
    desc: 'You can read articles and consume content posted by professionals.',
    img: require('../../images/slide1.png'),
  },
  {
    title: 'Post about Your Professional Life',
    desc: 'You can post about your job ,achievements and experiences.',
    img: require('../../images/slide2.png'),
  },
  {
    title: 'Search Jobs and Apply',
    desc: 'You can find jobs according to your skills',
    img: require('../../images/slide3.png'),
  },
  {
    title: 'Connect with Professionals',
    desc: 'You can connect with professionals from different fields.',
    img: require('../../images/slide4.png'),
  },
  {
    title: 'Chat with Professionals',
    desc: 'You can communicate via messages with professionals.',
    img: require('../../images/slide5.png'),
  },
];
const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.listView}>
        <FlatList
          ref={flatlistRef}
          horizontal
          onScroll={e => {
            const X = (
              e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            ).toFixed(0);
            setCurrentIndex(X);
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item, index}) => {
            return (
              <View style={styles.introItem}>
                <Image source={item.img} style={styles.introImages} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.indicatorView}>
        {DATA.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicator,
                {
                  width: currentIndex == index ? 30 : 5,
                  height: 5,
                  backgroundColor:
                    currentIndex == index ? THEME_COLOR : 'black',
                  borderRadius: 2.5,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.bottomView}>
        <View style={styles.btnView}>
          {currentIndex > 0 && (
            <TouchableOpacity
              style={styles.previousBtn}
              onPress={() => {
                flatlistRef.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) - 1,
                });
                setCurrentIndex(currentIndex - 1);
              }}>
              <Text style={[styles.btnText, {color: THEME_COLOR}]}>
                Previous
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.btnView}>
          {currentIndex < DATA.length - 1 && (
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => {
                flatlistRef.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) + 1,
                });
                setCurrentIndex(currentIndex + 1);
              }}>
              <Text style={[styles.btnText, {color: WHITE}]}>Next</Text>
            </TouchableOpacity>
          )}
          {currentIndex == DATA.length - 1 && (
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={[styles.btnText, {color: WHITE}]}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  introItem: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  introImages: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    marginTop: 20,
  },
  indicatorView: {
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    marginLeft: 10,
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  previousBtn: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtn: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: '40%',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
  },
  listView: {
    marginTop: 50,
  },
});

export default Welcome;
