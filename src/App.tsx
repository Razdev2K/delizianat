import React, { useState, useEffect } from 'react';
import { ComingSoonView } from './components/ComingSoonView.tsx';
import { LegalPagesModal } from './components/LegalPagesModal.tsx';
import { WaitlistModal } from './components/WaitlistModal.tsx';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalDefaultTab, setLegalDefaultTab] = useState('authenticity');
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const [subscriberCount, setSubscriberCount] = useState(482);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('delizia_waitlist') || '[]');
      if (stored.length > 0) {
        setSubscriberCount(482 + stored.length);
      }
    } catch (e) {
      // ignore
    }

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/legal/authenticity') {
        setLegalDefaultTab('authenticity');
        setLegalModalOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenLegal = (tab: string = 'authenticity') => {
    setLegalDefaultTab(tab);
    setLegalModalOpen(true);
  };

  const handleSubscriberAdded = () => {
    setSubscriberCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2924] antialiased selection:bg-[#476725]/20 selection:text-[#1E2813]">
      
      {/* Clean Coming Soon Page */}
      <ComingSoonView
        onOpenLegal={handleOpenLegal}
        subscriberCount={subscriberCount}
        onSubscriberAdded={handleSubscriberAdded}
      />

      {/* Workshop Policies & Authenticity Notice Modal */}
      <LegalPagesModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalDefaultTab}
        onOpenWaitlist={() => setWaitlistModalOpen(true)}
      />

      {/* Direct Waitlist Modal (if needed) */}
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
        onSubscriberAdded={handleSubscriberAdded}
      />

    </div>
  );
}
