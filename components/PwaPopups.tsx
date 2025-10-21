
import React, { useState, useEffect, useRef } from 'react';

// This interface is needed because the default `beforeinstallprompt` event is not in standard DOM types yet.
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PwaPopups: React.FC = () => {
    const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showInstallPopup, setShowInstallPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const installPopupRef = useRef<HTMLDivElement>(null);
    const updatePopupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setInstallPrompt(e as BeforeInstallPromptEvent);
            setShowInstallPopup(true);
            if (installPopupRef.current) {
                installPopupRef.current.style.transform = 'translate(-50%, 0)';
            }
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        if ('serviceWorker' in navigator) {
            const handleServiceWorker = async () => {
                try {
                    const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
                    
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    setShowUpdatePopup(true);
                                    if (updatePopupRef.current) {
                                        updatePopupRef.current.style.transform = 'translate(-50%, 0)';
                                    }
                                }
                            });
                        }
                    });
                } catch (error) {
                    console.error('SW registration failed: ', error);
                }
            };

            window.addEventListener('load', handleServiceWorker);

            let refreshing = false;
            const handleControllerChange = () => {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
            };

            navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

            return () => {
                window.removeEventListener('load', handleServiceWorker);
                navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
            };
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstall = async () => {
        if (!installPrompt) return;
        if (installPopupRef.current) {
            installPopupRef.current.style.transform = 'translate(-50%, -150%)';
        }
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        setInstallPrompt(null);
        setShowInstallPopup(false);
    };

    const handleDismiss = () => {
        if (installPopupRef.current) {
            installPopupRef.current.style.transform = 'translate(-50%, -150%)';
        }
        setShowInstallPopup(false);
    };
    
    const handleUpdate = () => {
        navigator.serviceWorker.getRegistration().then(reg => {
            if (reg && reg.waiting) {
                reg.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
        });
        setShowUpdatePopup(false);
    };

    return (
        <>
            <div 
                ref={installPopupRef}
                className={`fixed top-0 left-1/2 w-11/12 max-w-sm bg-white p-3 rounded-b-xl shadow-lg flex items-center justify-between transition-transform duration-300 ease-in-out z-50 ${showInstallPopup ? '' : 'hidden'}`}
                style={{ transform: 'translate(-50%, -150%)' }}
            >
                <div className="flex items-center">
                    <img src="/icons/icon-192.png" alt="آیکون کافه فردوسی" className="w-10 h-10 ml-3 rounded-lg" />
                    <p className="text-gray-700 text-sm">برای دسترسی آفلاین، <strong>فردوسی‌یار</strong> را نصب کنید.</p>
                </div>
                <div className="flex items-center">
                    <button onClick={handleInstall} className="bg-indigo-500 text-white text-sm font-bold py-2 px-3 rounded-lg ml-2">نصب</button>
                    <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600 text-2xl font-light leading-none flex justify-center items-center w-6 h-6">&times;</button>
                </div>
            </div>

            <div 
                ref={updatePopupRef}
                className={`fixed top-0 left-1/2 w-11/12 max-w-sm bg-blue-600 text-white p-3 rounded-b-xl shadow-lg flex items-center justify-between transition-transform duration-300 ease-in-out z-50 ${showUpdatePopup ? '' : 'hidden'}`}
                style={{ transform: 'translate(-50%, -150%)' }}
            >
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5m11 2v5h-5m0-16l-5 5m10 10l-5-5"/></svg>
                    <p className="text-sm">نسخه‌ی جدیدی آماده است. به‌روزرسانی می‌کنید؟</p>
                </div>
                <button onClick={handleUpdate} className="bg-white text-blue-600 text-sm font-bold py-2 px-3 rounded-lg">به‌روزرسانی</button>
            </div>
        </>
    );
};

export default PwaPopups;
