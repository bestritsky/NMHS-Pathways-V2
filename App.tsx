import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PartnerScroller from './components/PartnerScroller';
import BusinessBenefits from './components/BusinessBenefits';
import ProgramLevels from './components/ProgramLevels';
import TheSticker from './components/TheSticker';
import CareerExpo from './components/CareerExpo';
import ForStudents from './components/ForStudents';
import CTA from './components/CTA';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import VideoModal from './components/VideoModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onJoinClick={openModal} />
      
      <main className="flex-grow">
        <Hero onJoinClick={openModal} onWatchVideoClick={openVideoModal} />
        <PartnerScroller />
        <BusinessBenefits />
        <TheSticker />
        <ProgramLevels />
        <CareerExpo onJoinClick={openModal} />
        <ForStudents />
        <CTA onJoinClick={openModal} />
      </main>
      
      <Footer />
      <JoinModal isOpen={isModalOpen} onClose={closeModal} />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={closeVideoModal} 
        videoUrl="https://binaryadvisers.com/wp-content/uploads/2025/12/NMHS-Pathways-Final-2.mp4" 
      />
    </div>
  );
};

export default App;