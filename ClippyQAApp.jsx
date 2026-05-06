import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, List, Filter, Send, ChevronDown } from 'lucide-react';

const ClippyQAApp = () => {
  const [qaData, setQaData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('chat'); // 'chat' or 'list'
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  // Load Q&A data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('qa-data.json');
        const data = await response.json();
        setQaData(data);
        // Add welcome message
        setChatMessages([{
          type: 'bot',
          text: 'Hi! I\'m Clippy. Ask me any question or browse questions below.'
        }]);
      } catch (error) {
        console.error('Error loading Q&A data:', error);
        setChatMessages([{
          type: 'bot',
          text: 'Error loading Q&A data. Please make sure qa-data.json is in the same folder.'
        }]);
      }
    };
    loadData();
  }, []);

  // Filter Q&A items
  const getFilteredItems = () => {
    if (!qaData) return [];
    let filtered = qaData.qaItems;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  // Find answer in Q&A data
  const findAnswer = (userInput) => {
    const items = qaData?.qaItems || [];
    const input = userInput.toLowerCase();
    
    // Look for direct keyword matches
    const match = items.find(item =>
      item.question.toLowerCase().includes(input) ||
      item.answer.toLowerCase().includes(input)
    );
    
    if (match) {
      return match.answer;
    }
    
    // No match found
    return "I couldn't find an answer to that question. Try searching our Q&A list or browsing by category.";
  };

  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, {
      type: 'user',
      text: chatInput
    }];
    
    // Find and add bot response
    const answer = findAnswer(chatInput);
    newMessages.push({
      type: 'bot',
      text: answer
    });
    
    setChatMessages(newMessages);
    setChatInput('');
  };

  // Toggle expanded Q&A item
  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-indigo-600">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📎</div>
              <h1 className="text-3xl font-bold text-indigo-600">Clippy Q&A</h1>
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('chat')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'chat'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MessageCircle size={18} />
                Chat
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <List size={18} />
                Browse
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-md border-2 border-indigo-200">
            <Search size={20} className="text-indigo-600" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-lg"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-600 mt-2">
              Found {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Category Filter */}
        {qaData && viewMode === 'list' && (
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-indigo-200 hover:border-indigo-600'
              }`}
            >
              All Topics
            </button>
            {qaData.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-indigo-200 hover:border-indigo-600'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Content Area */}
        {viewMode === 'chat' ? (
          // Chat Mode
          <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg border-2 border-indigo-200 overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleChatSubmit} className="border-t-2 border-indigo-200 p-4 bg-gray-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-600"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <Send size={18} />
                  Send
                </button>
              </div>
            </form>
          </div>
        ) : (
          // List Mode
          <div className="space-y-3">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md border-2 border-indigo-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-indigo-50 transition-colors"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-gray-800 text-lg">{item.question}</p>
                      <p className="text-sm text-indigo-600 mt-1">
                        {qaData?.categories.find(c => c.id === item.category)?.name}
                      </p>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-indigo-600 transition-transform ${
                        expandedItems[item.id] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedItems[item.id] && (
                    <div className="border-t-2 border-indigo-200 px-6 py-4 bg-indigo-50">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No questions match your search.</p>
                <p className="text-gray-500 mt-2">Try different keywords or browse by category.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ClippyQAApp;
