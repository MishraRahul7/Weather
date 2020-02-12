import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import './SeasonDisplay.css';
const seasonConfig={
    Summer:{
        text:'Garmi ka mja, Chlo Ghoomne',
        iconName:<Brightness7Icon style={{fontSize:100}}/>
    },
    Winter:{
        text:'Ohh! Bhout Thand Hai',
        iconName:<AcUnitIcon style={{fontSize:100}}/>

    }
    
}
const getSeason =(lat , month)=>{
    if(month>2 && month<9){
        return lat > 0 ? 'Summer' : 'Winter'
    }else{
        return lat > 0 ? 'Winter' : 'Summer'
    }
}
const SeasonDisplay = (props) =>{
    const season= getSeason(props.lat,new Date().getMonth);
    const {text,iconName}=seasonConfig[season];
    console.log(text,iconName);

        return(
            <div className={`season-display ${season}`}>
                <span className="icon-left">{iconName}</span>
                <h3>{text}</h3>
                <span className="icon-right">{iconName}</span>
            </div>
    )
}

export default SeasonDisplay;
