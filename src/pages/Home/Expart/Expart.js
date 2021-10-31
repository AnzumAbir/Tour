import React from 'react';

const Expart = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{expertize}</h4>
        </div>
    );
};

export default Expart;