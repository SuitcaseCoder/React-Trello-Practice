import React from 'react';
import List from './list';

import './board.css';


//stateful >
export default class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lists: [
                {
                    title: 'Example List One'
                },
                {
                    title: 'Example List Two'
                },{
                    title: 'Example List Three'
                }
            ]
        };
    }

    render(){
        const lists = this.state.lists.map((list,index) => (
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        ));

        return (
            <div className="board">
                <h2>Example Board</h2>
                <ul className="lists">{lists}</ul>
            </div>
        );
    }
}


// static > 
// export default function Board(){
//     return(
//         <div className="board">
//         <h2>Example Board</h2>
//         <ul className="lists">
//             <li className="list-wrapper">
//                 <List />
//             </li>
//             <li className="list-wrapper">
//                 <List />
//             </li>
//             <li className="list-wrapper">
//                 <List />
//             </li>
//         </ul>
//         </div>
//     )
// }