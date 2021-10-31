import React from 'react';

import Expart from '../Expart/Expart';


const experts = [
    {
        // img: mechanic1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDF4JqmIc0bj26oXU7iol61Kp0mYgVwoWYg&usqp=CAU',
        name: 'Abdul John',
        expertize: '-Rock Climbing-'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABht07KtaM8WFwMpMsPYTa1hHG0WL4PvHyw&usqp=CAU',
        name: 'Selina Khatun',
        expertize: '-Banji Jumping-'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvt_-fxxb4bI03bqRyI0JwCrJjz1wEFwXfMw&usqp=CAU',
        name: 'Asma Lena',
        expertize: '-Sky Diving-'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7bWK_SSTNZ1h_oEXaHlUE6ZZFpP5Pq_AqA&usqp=CAU',
        name: 'Rohima Ara',
        expertize: '-History explorer-'
    },
]

const Exparts = () => {
    return (
        <div id="experts" className="container mb-5 p-5">
            <h2 className="text-primary" >Our Tour Guides</h2>
            <div className="row" >
                {experts.map(expert => <Expart
                    key={expert.name}
                    expert={expert}
                ></Expart>)}
            </div>
        </div>
    );
};

export default Exparts;