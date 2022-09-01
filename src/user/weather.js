import axios from 'axios';
import {useState, Component} from 'react';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {temp : 0, desc : '', icon : '', loading : true}
    }
    

    componentDidMount(){
        const cityName = 'Suwon';
        const apiKey = 'e52708e32127c4b99e0b39e35c6b0972';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data =responseData.data;
                this.setState({
                    name : data.name,
                    temp : data.main.temp,
                    desc : data.weather[0].description,
                    icon : data.weather[0].icon,
                    loading : false
                });         
            })
            .catch(error => console.log(error));
    }

    render(){
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        const temp = this.state.temp -273.15
        if (this.state.loading){
            return <p>Loading</p>
        }else{
            return(
                <div className="weather box ">
                    <img src={imgSrc}/>
                    <p>{this.state.name}</p>
                    <p>{temp.toFixed(1)}°C</p>
                    <p>{this.state.desc}</p>
                </div>
            )
        }
    }
}

export default Weather