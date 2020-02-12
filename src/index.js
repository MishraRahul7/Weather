import React from 'react';
import ReactDom from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state={lat:null,long:null,errorMessage:''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({lat: position.coords.latitude,longi:position.coords.longitude}),
            err=> this.setState({errorMessage:err.message})
        );
    }
    renderContent=()=>{
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>;
    }
    render(){
        return(
            <>
                {this.renderContent()}
            </>
        )
    }
}
ReactDom.render(<App/>,document.querySelector('#root'));
