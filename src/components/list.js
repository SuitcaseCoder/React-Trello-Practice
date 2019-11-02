import React from 'react';
import Card from './card';

export default function List(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <ul className="list">
                <li>
                    <Card text="Example Card One"/>
                </li>
                <li>
                    <Card text="Example Card Two"/>
                </li>
                <li>
                    <Card text="Example Card Three"/>
                </li>
            </ul>
        </div>
    );
}

List.defaultProps = {
    title:''
}