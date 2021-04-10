import React from 'react';
import './Cards.css';
import Card from './Card';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';

const Cards = (props) => {
    const CurrentData = props.CurrentData
    return(
        <>
            <div className="dates">
                <h3>
                    <span>Updated: </span>{CurrentData.lastUpdate}
                </h3>
            </div>
            {CurrentData.confirmed===null?null
            :<div className="Cards_container">
                 <div className="card_row2">
                     <Card borderColor='blue'  icons={<GroupAddIcon className='emogi' />} msg='confirmed' my_data={CurrentData.confirmed}/>
                     <Card borderColor='red'   icons={<LocalHotelIcon className='emogi' />} msg='active' my_data={CurrentData.confirmed - CurrentData.recovered - CurrentData.deaths} />
                 </div>
                 <div className="card_row1">
                     <Card borderColor='green' icons={<SportsHandballIcon className='emogi' />} msg='recovered' my_data={CurrentData.recovered} />
                     <Card borderColor='blue'  icons={<AirlineSeatFlatIcon className='emogi' />} msg='deaths' my_data={CurrentData.deaths}/>
                     <Card borderColor='red' icons={<SportsKabaddiIcon className='emogi' />} msg='serious' my_data={0} />
                 </div>
            </div>}
        </>
    )
}

export default Cards;

