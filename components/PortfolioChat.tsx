
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const PortfolioChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm the Portfolio Studio AI. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`size-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isOpen ? 'bg-primary text-brand-light rotate-90' : 'bg-primary text-brand-light hover:rotate-12'
          } shadow-primary/20`}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'chat_bubble'}
          </span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 sm:bottom-28 sm:right-8 w-[95vw] sm:w-[85vw] md:w-[400px] max-h-[500px] h-[65vh] sm:h-[70vh] sm:max-h-[600px] bg-white rounded-2xl shadow-2xl border border-primary/10 z-[60] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in">
          <div className="bg-primary p-6 text-brand-light">
            <h3 className="font-bold text-lg uppercase tracking-widest">Assistant</h3>
            <p className="text-xs opacity-70">Powered by Gemini AI</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-brand-light rounded-br-none' 
                      : 'bg-primary/5 text-primary rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-primary/5 p-4 rounded-xl text-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-primary/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-primary/5 border-none rounded-lg px-4 py-3 text-sm text-primary placeholder:text-primary/40 focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-brand-light p-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/5 backdrop-blur-[2px] z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default PortfolioChat;
