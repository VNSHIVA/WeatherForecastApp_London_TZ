import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text , View, icon, ActivityIndicator  } from "react-native";
import React from "react";

const App = () => {
  const [data, setData] = React.useState({"current": {"cloud": 100, "condition": {"code": 1183, "icon": "//cdn.weatherapi.com/weather/64x64/day/296.png", "text": "Light rain"}, "feelslike_c": 4.8, "feelslike_f": 40.6, "gust_kph": 19.7, "gust_mph": 12.2, "humidity": 86, "is_day": 1, "last_updated": "2024-01-01 15:45", "last_updated_epoch": 1704123900, "precip_in": 0.03, "precip_mm": 0.77, "pressure_in": 29.57, "pressure_mb": 1001, "temp_c": 7.4, "temp_f": 45.3, "uv": 2, "vis_km": 9, "vis_miles": 5, "wind_degree": 158, "wind_dir": "SSE", "wind_kph": 14, "wind_mph": 8.7}, "location": {"country": "United Kingdom", "lat": 51.52, "localtime": "2024-01-01 15:52", "localtime_epoch": 1704124366, "lon": -0.11, "name": "London", "region": "City of London, Greater London", "tz_id": "Europe/London"}});
  const icon = "https:" + data.current.condition.icon;
  const [loading, setLoading] = React.useState(false);
  const date = new Date(data.location.localtime).toDateString();
  const day = new Date(data.location.localtime).toLocaleString('default', {weekday: 'short'});


  console.log('===================================');
  console.log(data.current.cloud); 
  console.log(icon);
  console.log("https://cdn.weatherapi.com/weather/64x64/day/296.png");
  console.log('===================================');  
  return(
   <>
       {loading ?(
          <ActivityIndicator size="large" color="green" />
        ) :

        ( 
            data && (
              <SafeAreaView style={styles.mainContainer}>
              <Text style={styles.temp}> Temparature: {data.current.temp_c}</Text>
              <Text style={styles.temp}> Humidity: {data.current.humidity} </Text>
              <Text style={styles.temp}>
                 {day}, {date}
              </Text>
              <Text style={styles.temp}>{data.location.name}</Text>
              <Image source={{uri: icon}}
               style={styles.icon}
               resizeMode="contain"
              />
              </SafeAreaView>
          
        )  
    )}
  </>
  );
};

export default App;
const styles = StyleSheet.create({
  temp:{
    fontSize: 25,
    textAlign: "center"
  },
  container:{
    flex:1,

    alignItems: 'center',
    justifyContent: 'center'
  },
  icon:{
    width: 100, 
    height: 100,
    alignSelf: "center",
    },
  mainContainer:{
    textAlign: "center",
    marginTop: 255,
    margin: 15 ,
    borderRadius: 25,
    backgroundColor:'#F1F1F1',
    width: 325,
    height: 325,
    alignContent:"center",
    justifyContent: "space-around"
  }
})