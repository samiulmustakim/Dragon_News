import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "id": 1,
    "title": "New Technology Brings Faster Internet to More People"
  },
  {
    "id": 2,
    "title": "Local Farmers See Growth in Vegetable Production"
  },
  {
    "id": 3,
    "title": "City Introduces New Public Transport Services"
  }
]


const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-4 container mx-auto mt-8'>
            <button className='btn shadow-none border-none rounded-none bg-pink-600 text-white'>Latest News</button>
            <Marquee className='tracking-wide' speed={70} pauseOnHover={true}>
                {news.map(n => {
                    return <span key={n.id}>{n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;