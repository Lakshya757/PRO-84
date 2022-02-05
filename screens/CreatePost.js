import React,{Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, TextInput, Platform, StatusBar } from 'react-native'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from 'react-native-responsive-fontsize';


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreatePost extends Component{
  constructor(props){
    super(props);
    this.state={
      fontsLoaded:false,
      dropDownHeight:40,
      previewImage:'image_1',
    }
  }

  async _loadFonts() {
    await Font.load(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFonts();
  }

    render(){

        let preview_image={
          image_1: require('../assets/image_1.jpg'),
          image_2: require('../assets/image_2.jpg'),
          image_3: require('../assets/image_3.jpg'),
          image_4: require('../assets/image_4.jpg'),
          image_5: require('../assets/image_5.jpg'),
          image_6: require('../assets/image_6.jpg'),
          image_7: require('../assets/image_7.jpg'),
        }
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_image[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        
                        <View style={{height:RFValue(this.state.dropDownHeight)}}>
                            <DropDownPicker
                                items={[
                                  { label: 'Yoga', value: 'image_1' },
                                  { label: 'Nutrition', value: 'image_2' },
                                  { label: 'More Nutrition', value: 'image_3' },
                                  { label: 'Sports', value: 'image_4' },
                                  { label: 'Cycling', value: 'image_5' },
                                  { label: 'Boating', value: 'image_6' },
                                  { label: 'More Boating', value: 'image_7' }
                                ]}

                                defaultValue = {this.state.previewImage}
                                containerStyle={{
                                    height:40,
                                    borderRadius:20,
                                    marginBottom:10,
                                    color:'white'
                                }}
                                onOpen={()=>{
                                    this.setState({dropDownHeight: 170})
                                }}
                                onClose={()=>{
                                    this.setState({
                                        dropDownHeight:40
                                    })
                                }}

                                style={{backgroundColor:'transparent'}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    color:'white'
                                }}
                                dropDownStyle={{
                                    backgroundColor:'#34D9E8' 
                                }}
                                labelStyle={{
                                    color:'#34D9E8'
                                }}
                                arrowStyle={{
                                    color: '#34D9E8'
                                }}
                                onChangeItem={item=>this.setState({
                                    previewImage: item.value
                                })}
                            />
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption=>this.setState({caption})}
                            placeholder={'Caption'}
                            placeholderTextColor='white'
                        />
                    </ScrollView>
                </View>
            </View>
        )
      }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C284C"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  }
});