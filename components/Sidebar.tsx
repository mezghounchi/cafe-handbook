
import React from 'react';
import { Chapter, ChapterId } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  activeChapter: ChapterId;
  onNavigate: (id: ChapterId) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ chapters, activeChapter, onNavigate, isOpen }) => {
  return (
    <aside 
      id="sidebar" 
      className={`w-full md:w-72 p-6 shadow-lg md:sticky md:top-0 md:h-screen transition-transform transform fixed md:relative z-40 bg-[#F6F1E9] ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#4A3F35]">فردوسی‌یار</h1>
        <p className="text-md text-gray-500 mt-2">راهنمای تیم کافه فردوسی</p>
      </div>
      <nav id="nav-menu">
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(chapter.id);
            }}
            className={`block py-3 px-5 text-[1.1rem] font-semibold text-[#4A3F35] rounded-xl transition-all duration-200 ease-in-out border-r-4 hover:bg-[#EAE0D5] hover:text-[#8B5E3C] my-1 ${
              activeChapter === chapter.id
                ? 'bg-white text-[#8B5E3C] border-r-[#8B5E3C] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05)]'
                : 'border-transparent'
            }`}
          >
            {chapter.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
