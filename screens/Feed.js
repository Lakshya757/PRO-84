import React,{Component} from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image, FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import PostCard from './PostCard'

let posts = require('../screens/temp_posts.json')

export default class Feed extends Component{

    renderItem =({item: currentPost })=>{
        <PostCard post={currentPost} navigation={this.props.navigation} />
    }

    keyExtractor = (item, index)=> index.toString()

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={posts}
                      renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2C284C'
    },
    droidSafeArea:{
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection:'row',
    },
    appIcon:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft: '7%'
    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    appTitleTextContainer:{
       flex: 0.8,
       justifyContent:'center' 
    },
    appTitleText:{
        color:'white',
        fontSize: RFValue(28),
        alignSelf:'center',
        paddingRight: '20%'
    },
    cardContainer:{
      flex:0.85
    }
})