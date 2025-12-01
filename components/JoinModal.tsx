import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xanrjnyy", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const result = await response.json();
        // Fix: Object.hasOwn is not available in older TS libs/browsers.
        // Using property in object check instead.
        if (result && typeof result === 'object' && 'errors' in result) {
            setError(result.errors.map((err: any) => err.message).join(", "));
        } else {
            setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setError("Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose} type="button" className="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none">
              <span className="sr-only">Close</span>
              <X size={24} />
            </button>
          </div>

          {submitted ? (
            <div className="p-10 text-center">
               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're Awesome!</h3>
              <p className="text-slate-600 mb-6">
                Thanks for stepping up for New Milford's students. We'll be in touch shortly to schedule your brief 15-min intro call.
              </p>
              <button 
                onClick={onClose}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-nmgreen-600 text-base font-medium text-white hover:bg-nmgreen-700 focus:outline-none sm:text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-2xl leading-6 font-bold text-slate-900" id="modal-title">
                    Partner with Pathways
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-slate-500 mb-6">
                      Just let us know you're interested. No commitment yet. We just want to say hi.
                    </p>
                    
                    {error && (
                      <div className="mb-4 p-3 rounded-md bg-red-50 text-red-700 text-sm flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          id="name" 
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-nmgreen-500 focus:ring-nmgreen-500 sm:text-sm p-3 border" 
                          placeholder="Steve Jones" 
                        />
                      </div>
                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-slate-700">Business Name</label>
                        <input 
                          type="text" 
                          name="business" 
                          required 
                          id="business" 
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-nmgreen-500 focus:ring-nmgreen-500 sm:text-sm p-3 border" 
                          placeholder="Jones Law Firm" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          id="email" 
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-nmgreen-500 focus:ring-nmgreen-500 sm:text-sm p-3 border" 
                          placeholder="steve@example.com" 
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-nmgreen-600 hover:bg-nmgreen-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nmgreen-500 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Interest'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinModal;