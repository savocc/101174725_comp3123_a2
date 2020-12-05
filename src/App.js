import React from 'react';
 
import axios from 'axios';
 
export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
       data: [],
       icons: "",
       city:"",
       temp:"",
       feelsLike:"",
       minTemp:"",
       maxTemp:"",
      country:"",
      weatherDescr:""
      }
  }
 

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=0848718e1c76bc8242ac328cc8f3f0f7`)
      .then(res => {
        this.setState({ data: res });
        this.getIcon(this.state.data.data.weather[0].icon)
        this.setState({ city: this.state.data.data.name }); 
        this.setState({ temp: this.state.data.data.main.temp });   
        this.setState({ feelsLike: this.state.data.data.main.feels_like });  
        this.setState({ minTemp: this.state.data.data.main.temp_min }); 
        this.setState({ maxTemp: this.state.data.data.main.temp_max }); 
        this.setState({ country: this.state.data.data.sys.country }); 
        this.setState({ weatherDescr: this.state.data.data.weather[0].description }); 
      } ) 
    
    
    
    }

  getIcon  ( res) {     
      let url = 'https://openweathermap.org/img/wn/'+res+'@2x.png';
      this.setState({ icons: url });     
  }
  

  render() {
    const mystyle = {

      backgroundImage: "linear-gradient(315deg, #fde7f9 0%, #aacaef 74%)",
      backgroundSize: "cover",
       fontFamily:"Comic Sans MS, Comic Sans, cursive",
       display:"block",
        
       position: "absolute",
       textAlign: "center",    
       width:"100%" ,
       height:"100%"
    };
    return (
      <div style={ mystyle }>
      <h1 >Current weather app</h1>
      <img src={this.state.icons} height='200' width='200' alt='img'></img>
      <p> {JSON.stringify(this.state.city).slice(1,-1)},{JSON.stringify(this.state.country).slice(1,-1)}</p>
      <p>{JSON.stringify(this.state.weatherDescr).slice(1,-1)}</p>
    <p>Temperature: {Math.round(JSON.stringify(this.state.temp))}</p>
    <p>Feels like: {Math.round(JSON.stringify(this.state.feelsLike))}</p>
    <p>Minimum temperature through the day: {Math.round(JSON.stringify(this.state.minTemp))}</p>
   < p>Maximum temperature through the day: {Math.round(JSON.stringify(this.state.maxTemp))}</p> 
     
     </div>
    );
  
  }}
  
