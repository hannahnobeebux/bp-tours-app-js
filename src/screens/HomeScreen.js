import { View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
// import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import ActivityCard from '../components/ActivityCard';
import {activities} from '../model/data';

export default function HomeScreen({navigation}) {

    // const carouselRef = useRef(null);  // Use useRef instead of this._carousel

    // const renderBanner = ({item, index}) => {
    //     return <BannerSlider data={item}/>
    // };

    const renderActivity = ({ item }) => (
        <ActivityCard activity={item} onPress={(activity) => console.log('Clicked:', activity.name)} />
      );
    

    return (
      <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
          <ScrollView style={{padding:20}}>
              {/* Header with user name and profile image */}
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20
              }}>
                  <Text style={{fontSize:18, fontFamily: 'Roboto-Medium'}}>Hello John Doe</Text>
                  
                  {/* User Profile Image */}
                  <ImageBackground 
                      source={require('../assets/user-profile.jpg')} 
                      style={{width:35, height:35, marginLeft: 10}} 
                      imageStyle={{borderRadius: 25}} 
                  />
              </View>

              {/* Search Bar */}
              <View
                  style={{
                      flexDirection: 'row',
                      borderColor: '#C6C6C6',
                      borderWidth: 1,
                      borderRadius: 8,
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      marginTop: 10, 
                  }}>
                  <Text style={{marginRight:5}}>🔍</Text>
                  <TextInput 
                      placeholder="Search"
                      style={{
                          flex: 1, 
                          fontSize: 16,
                          paddingVertical: 0, 
                          paddingHorizontal: 5,
                      }}
                  />
              </View>
              
              {/* Section Title and See All Button */}
              <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 18}}>Available Activities</Text>
                  <TouchableOpacity onPress={() => {console.log("See all clicked!")}}>
                      <Text style={{color: '#0aada8'}}>See all</Text>
                  </TouchableOpacity>
              </View>

              {/* Activity Grid */}
        <FlatList
          data={activities}
          renderItem={renderActivity}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}  // Display in 2 columns
          columnWrapperStyle={{ justifyContent: 'space-between' }} // Space between grid items
        />

              {/* Carousel Section */}
              {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        /> */}

          </ScrollView>
      </SafeAreaView>
    );
}

