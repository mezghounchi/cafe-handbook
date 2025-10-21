
import React from 'react';

interface TeamCardProps {
    name: string;
    description: string;
    imgSrc: string;
    alt: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, description, imgSrc, alt }) => {
    return (
        <div className="bg-white rounded-xl p-6 text-center shadow-[0_4px_15px_-2px_rgba(0,0,0,0.05)] border border-[#EAE0D5] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] flex flex-col justify-start">
            <img src={imgSrc} alt={alt} className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#F6F1E9]" />
            <h5 className="text-xl font-bold text-[#4A3F35] mb-2">{name}</h5>
            <p className="text-base leading-7 text-[#5f5349] flex-grow">{description}</p>
        </div>
    );
};

export default TeamCard;
