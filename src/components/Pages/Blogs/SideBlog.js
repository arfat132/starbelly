import React from 'react';

const SideBlog = ({ blog }) => {
    const { name, img, description } = blog;
    return (
        <div className="card card-side bg-base-100 border border-gray-200 rounded-none mb-3 -z-50">
            <figure><img className='w-24' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sm">{name}</h2>
                <p>{description.slice(0, 60)}</p>
            </div>
        </div>
    );
};

export default SideBlog;