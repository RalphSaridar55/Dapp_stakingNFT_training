import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './Whitelist.css';

const Whitelist = () =>{

    return(
        <div className='whitelist'>
            <div className='whitelist__left'>
                <h2>Our RoadMap</h2>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='whitelist__right'>
                <img src="./whitelist_img.jpg" className='whitelist__right__img'/>
            </div>
        </div>
    )
}

export default Whitelist