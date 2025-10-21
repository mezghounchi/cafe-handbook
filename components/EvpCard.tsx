
import React from 'react';

interface EvpCardProps {
    title: string;
    children: React.ReactNode;
}

const EvpCard: React.FC<EvpCardProps> = ({ title, children }) => {
    return (
        <div className="bg-white rounded-xl p-6 mt-6 border border-[#EAE0D5] shadow-[0_4px_15px_-2px_rgba(0,0,0,0.03)]">
            <h4 className="text-xl font-bold text-[#8B5E3C] mb-3">{title}</h4>
            <div className="text-lg leading-9 text-[#5f5349]">{children}</div>
        </div>
    );
};

export default EvpCard;
