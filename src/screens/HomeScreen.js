import { View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
// import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import ActivityCard from '../components/ActivityCard';
import {activities} from '../model/data';
import WeatherCard from '../components/WeatherCard' 

export default function HomeScreen({navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(activities.map(activity => activity.category))];

    const filteredActivities = activities.filter(activity => {
        const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? activity.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    //to reset after searching or filtering 
    const resetFilters = () => {  
        setSearchQuery('');
        setSelectedCategory('');
     }


    return (
      <SafeAreaView style={{flex:1, backgroundColor: 'white'}} testID="activitiesScreen">
          <ScrollView style={{padding:20}}>

              {/* Header with user name and profile image */}
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20
              }}>
                  <Text style={{fontSize:18, fontFamily: 'Roboto-Medium'}}>Hello Hannah Nobeebux</Text>
                  
                  {/* User Profile Image */}
                  <ImageBackground 
                      source={require('../assets/user-profile-2.png')} 
                      style={{width:35, height:35, marginLeft: 10}} 
                      imageStyle={{borderRadius: 25}} 
                  />
              </View>

              <WeatherCard city="Blackpool" />

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
                      value={searchQuery}
                      onChangeText={text => setSearchQuery(text)}
                      style={{
                          flex: 1, 
                          fontSize: 16,
                          paddingVertical: 0, 
                          paddingHorizontal: 5,
                      }}
                  />
              </View>

              {/* Category Filter */}
              <View style={{ marginVertical: 15 }}>
                    <Text style={{ fontSize: 18 }}>Filter by Category</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map(category => (
                            <TouchableOpacity 
                                key={category} 
                                onPress={() => setSelectedCategory(category)} 
                                style={{
                                    backgroundColor: selectedCategory === category ? '#0960c8' : '#f0f0f0',
                                    paddingVertical: 8,
                                    paddingHorizontal: 15,
                                    marginRight: 10,
                                    borderRadius: 20,
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{
                                    color: selectedCategory === category ? 'white' : '#333',
                                    fontSize: 16,
                                }}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Refresh Button */}
                <TouchableOpacity 
                    onPress={resetFilters}
                    style={{
                        paddingVertical: 10,
                        borderRadius: 8,
                        marginBottom: 20,
                        alignSelf: 'flex-start',
                    }}
                >
                    <Text style={{ color: '#0aada8', fontSize: 16 }}>🔄 Refresh</Text>
                </TouchableOpacity>
              
              {/* Section Title and See All Button */}
              <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 18}}>Available Activities</Text>
              </View>

         {/* Activities List */}
         <View testID="allActivities">
         <ScrollView>
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map(activity => (
                            <ActivityCard key={activity.id} activity={activity} navigation={navigation} />
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, color: 'gray' }}>
                            No activities found.
                        </Text>
                    )}
                </ScrollView>
                </View>
          </ScrollView>
      </SafeAreaView>
    );
}

