import React, {Component} from 'react';
import Map from "./MapView";
import Card from "./Card";
import Screen from "./Screen";

const View = props => {
    return(
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <Map/>
                </div>
                <div className='col-md-4'>
                    <Card/>
                </div>
                <div className='col-md-4'>
                    <Screen/>
                </div>
            </div>
          
        </div>
    )
}

export default View;