
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChapterId } from './types';
import { CHAPTERS } from './constants';
import Sidebar from './components/Sidebar';
// import PwaPopups from './components/PwaPopups';
import Chapter1 from './components/chapters/Chapter1';
import Chapter2 from './components/chapters/Chapter2';
import Chapter3 from './components/chapters/Chapter3';
import Chapter4 from './components/chapters/Chapter4';
import Chapter5 from './components/chapters/Chapter5';
import Chapter6 from './components/chapters/Chapter6';

const chapterComponents: Record<ChapterId, React.ComponentType> = {
  chapter1: Chapter1,
  chapter2: Chapter2,
  chapter3: Chapter3,
  chapter4: Chapter4,
  chapter5: Chapter5,
  chapter6: Chapter6,
};

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('chapter1');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLElement>(null);

  const handleNavigate = useCallback((chapterId: ChapterId) => {
    setActiveChapter(chapterId);
    setSidebarOpen(false);
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  }, []);
  
  const ActiveChapterComponent = chapterComponents[activeChapter];

  useEffect(() => {
    const closeSidebarOnClickOutside = (event: MouseEvent) => {
        if (isSidebarOpen && window.innerWidth < 768) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && !sidebar.contains(event.target as Node)) {
                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle && !menuToggle.contains(event.target as Node)) {
                    setSidebarOpen(false);
                }
            }
        }
    };
    
    document.addEventListener('click', closeSidebarOnClickOutside);
    
    return () => {
        document.removeEventListener('click', closeSidebarOnClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDF8F0]">
        <Sidebar 
            chapters={CHAPTERS}
            activeChapter={activeChapter}
            onNavigate={handleNavigate}
            isOpen={isSidebarOpen}
            setIsOpen={setSidebarOpen}
        />

        <main ref={mainContentRef} className="flex-1 pt-20 px-6 pb-6 md:p-12 overflow-y-auto">
            <button 
                id="menu-toggle" 
                className="md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-md shadow-lg"
                onClick={(e) => {
                    e.stopPropagation();
                    setSidebarOpen(prev => !prev);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A3F35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            
            <div className="opacity-0 animate-fadeIn" style={{ animation: 'fadeIn 0.5s forwards' }}>
                <ActiveChapterComponent />
            </div>
        </main>
        
        {/* <PwaPopups /> */}
    </div>
  );
};

export default App;
