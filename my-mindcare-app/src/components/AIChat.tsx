import type { ChatMessage } from '../types/types';
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Mic, MicOff, Send, Video, Phone } from 'lucide-react';
import './AIChat.css';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'नमस्ते! मैं आपका AI साथी हूं। मैं यहां सुनने और सहायता प्रदान करने के लिए हूं। आज कैसा महसूस हो रहा है?',
      timestamp: new Date().toISOString(),
      sender: 'ai',
      type: 'text',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => scrollToBottom(), [messages]);

  const generateAIResponse = (userInput: string, lang: 'en' | 'hi') => {
    const responses = lang === 'hi'
      ? [
          'मैं समझ सकता हूं कि यह आसान नहीं है। क्या बताएंगे कि सबसे ज़्यादा क्या परेशान कर रहा है?',
          'साझा करने के लिए धन्यवाद। क्या साथ में एक साँस लेने की तकनीक आज़माएँ?',
        ]
      : [
          "That sounds tough. What's bothering you the most right now?",
          'Thanks for sharing. Would trying a short breathing exercise help?',
        ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      timestamp: new Date().toISOString(),
      sender: 'user',
      type: 'text',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(userMessage.content, language),
        timestamp: new Date().toISOString(),
        sender: 'ai',
        type: 'text',
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const toggleVoiceInput = () => setIsListening((s) => !s);

  const suggestedResponses = language === 'hi'
    ? ['मैं तनाव महसूस कर रहा हूं', 'मुझे नींद नहीं आ रही']
    : ["I'm feeling stressed", "I can't sleep well"];

  return (
    <div className="chat-container">
      <h2>AI Mental Health Companion</h2>
      <div className="chat-box">
        <div className="chat-header">
          <div className="chat-header-left">
            <Bot className="chat-icon" />
            <div>
              <strong>AI Companion</strong>
              <div className="status">Online • 24/7</div>
            </div>
          </div>
          <div className="chat-header-right">
            <Video className="chat-icon-small" />
            <Phone className="chat-icon-small" />
          </div>
        </div>

        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <p>{msg.content}</p>
              <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          ))}
          {isTyping && <div className="message ai">Typing...</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="suggested-responses">
          {suggestedResponses.map((s, i) => (
            <button key={i} onClick={() => setInputMessage(s)}>{s}</button>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={language === 'hi' ? 'अपना संदेश यहां लिखें...' : 'Type your message...'}
          />
          <button onClick={toggleVoiceInput}>{isListening ? <MicOff /> : <Mic />}</button>
          <button onClick={handleSendMessage}><Send /></button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

