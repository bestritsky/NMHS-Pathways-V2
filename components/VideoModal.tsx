import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-slate-900 bg-opacity-90 backdrop-blur-sm" 
          onClick={onClose} 
          aria-hidden="true"
        ></div>

        <div className="inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl w-full relative border border-slate-700">
          <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
            <button 
              onClick={onClose} 
              type="button" 
              className="bg-slate-900/50 backdrop-blur-md rounded-full p-2 text-white hover:text-nmgold-400 hover:bg-slate-800 transition-colors focus:outline-none border border-white/10"
            >
              <span className="sr-only">Close</span>
              <X size={24} />
            </button>
          </div>
          
          <div className="aspect-video w-full bg-black">
            <video 
              controls 
              autoPlay 
              className="w-full h-full"
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;