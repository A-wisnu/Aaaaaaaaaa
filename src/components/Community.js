import React, { useState, useEffect } from 'react';
import { 
  Hash, 
  Users, 
  MessageSquare, 
  Send, 
  Plus, 
  Search, 
  MoreVertical,
  Pin,
  Heart,
  Reply,
  Bookmark,
  Flag,
  Crown,
  Shield,
  Mic,
  MicOff,
  Volume2,
  Settings,
  UserPlus,
  Smile
} from 'lucide-react';
import AuthGuard from './AuthGuard';

const Community = () => {
  const [user, setUser] = useState(null);
  const [activeChannel, setActiveChannel] = useState('general');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Mock data
    setOnlineUsers([
      { id: 1, name: 'CodeMaster', avatar: '👨‍💻', status: 'online', role: 'expert' },
      { id: 2, name: 'DataPro', avatar: '👩‍💼', status: 'online', role: 'expert' },
      { id: 3, name: 'StudyBuddy', avatar: '📚', status: 'away', role: 'member' },
      { id: 4, name: 'MathGenius', avatar: '🧮', status: 'online', role: 'expert' },
      { id: 5, name: 'WriterPro', avatar: '✍️', status: 'offline', role: 'expert' }
    ]);

    setMessages([
      {
        id: 1,
        user: { name: 'CodeMaster', avatar: '👨‍💻', role: 'expert' },
        content: 'Hey everyone! Just finished helping a student with their React project. Anyone else working on React assignments?',
        timestamp: '10:30 AM',
        reactions: [{ emoji: '👍', count: 3 }, { emoji: '🔥', count: 1 }],
        replies: 2
      },
      {
        id: 2,
        user: { name: 'StudyBuddy', avatar: '📚', role: 'member' },
        content: 'I need help with my data structures assignment. Anyone available for a quick consultation?',
        timestamp: '10:45 AM',
        reactions: [{ emoji: '🤔', count: 1 }],
        replies: 0
      },
      {
        id: 3,
        user: { name: 'DataPro', avatar: '👩‍💼', role: 'expert' },
        content: '@StudyBuddy I can help you with data structures! What specific topic are you struggling with?',
        timestamp: '10:50 AM',
        reactions: [{ emoji: '❤️', count: 2 }],
        replies: 1
      }
    ]);
  }, []);

  const channels = [
    { id: 'general', name: 'general', type: 'text', members: 156 },
    { id: 'programming', name: 'programming-help', type: 'text', members: 89 },
    { id: 'academic', name: 'academic-discussion', type: 'text', members: 124 },
    { id: 'announcements', name: 'announcements', type: 'text', members: 200 },
    { id: 'study-groups', name: 'study-groups', type: 'text', members: 67 },
    { id: 'voice-general', name: 'General Voice', type: 'voice', members: 12 }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      user: { 
        name: user?.customDisplayName || user?.displayName || 'You', 
        avatar: '🎓', 
        role: 'member' 
      },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reactions: [],
      replies: 0
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const addReaction = (messageId, emoji) => {
    setMessages(messages.map(msg => {
      if (msg.id === messageId) {
        const existingReaction = msg.reactions.find(r => r.emoji === emoji);
        if (existingReaction) {
          existingReaction.count += 1;
        } else {
          msg.reactions.push({ emoji, count: 1 });
        }
      }
      return msg;
    }));
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'expert': return 'text-purple-600';
      case 'admin': return 'text-red-600';
      case 'moderator': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'expert': return <Crown className="h-3 w-3" />;
      case 'admin': return <Shield className="h-3 w-3" />;
      case 'moderator': return <Shield className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <AuthGuard requireDisplayName={true}>
      <div className="h-screen bg-gray-100 flex">
        {/* Server Sidebar */}
        <div className="w-20 bg-gray-900 flex flex-col items-center py-4 space-y-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:rounded-xl transition-all duration-200 cursor-pointer">
            <span className="text-white font-black text-lg">A</span>
          </div>
          <div className="w-12 h-12 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:rounded-xl">
            <Users className="h-6 w-6 text-gray-300" />
          </div>
          <div className="w-12 h-12 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:rounded-xl">
            <Plus className="h-6 w-6 text-gray-300" />
          </div>
        </div>

        {/* Channels Sidebar */}
        <div className="w-64 bg-gray-800 flex flex-col">
          {/* Server Header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-gray-700 shadow-sm">
            <h1 className="text-white font-bold">Assist Community</h1>
            <MoreVertical className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>

          {/* Channels List */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Text Channels</span>
                <Plus className="h-4 w-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
              {channels.filter(c => c.type === 'text').map((channel) => (
                <div
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`flex items-center px-2 py-1 rounded cursor-pointer group ${
                    activeChannel === channel.id ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Hash className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium flex-1">{channel.name}</span>
                  <span className="text-xs text-gray-500">{channel.members}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Voice Channels</span>
                <Plus className="h-4 w-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
              {channels.filter(c => c.type === 'voice').map((channel) => (
                <div
                  key={channel.id}
                  className="flex items-center px-2 py-1 rounded cursor-pointer group text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium flex-1">{channel.name}</span>
                  <span className="text-xs text-gray-500">{channel.members}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Panel */}
          <div className="h-16 bg-gray-900 px-3 flex items-center">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm font-bold">
                  {(user?.customDisplayName || user?.displayName || 'U')[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">
                  {user?.customDisplayName || user?.displayName || 'User'}
                </div>
                <div className="text-gray-400 text-xs">Online</div>
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="p-1 text-gray-400 hover:text-white">
                <Mic className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-white">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Channel Header */}
          <div className="h-16 bg-white px-6 flex items-center justify-between border-b border-gray-200 shadow-sm">
            <div className="flex items-center">
              <Hash className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">
                {channels.find(c => c.id === activeChannel)?.name || 'general'}
              </h2>
              <div className="ml-4 text-sm text-gray-500">
                {channels.find(c => c.id === activeChannel)?.members} members
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                <Pin className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                <UserPlus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="group hover:bg-gray-50 -mx-6 px-6 py-2 rounded">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg">
                    {message.user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-semibold ${getRoleColor(message.user.role)}`}>
                        {message.user.name}
                      </span>
                      {getRoleIcon(message.user.role)}
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <div className="text-gray-900 leading-relaxed">{message.content}</div>
                    
                    {/* Reactions */}
                    {message.reactions.length > 0 && (
                      <div className="flex items-center space-x-1 mt-2">
                        {message.reactions.map((reaction, index) => (
                          <button
                            key={index}
                            onClick={() => addReaction(message.id, reaction.emoji)}
                            className="flex items-center space-x-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                          >
                            <span>{reaction.emoji}</span>
                            <span className="text-gray-600">{reaction.count}</span>
                          </button>
                        ))}
                        <button
                          onClick={() => addReaction(message.id, '👍')}
                          className="p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Smile className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Message Actions */}
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Reply className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 bg-white border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name || 'general'}`}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button type="button" className="p-1 text-gray-400 hover:text-gray-600">
                    <Smile className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Members Sidebar */}
        <div className="w-64 bg-gray-50 border-l border-gray-200">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Online — {onlineUsers.filter(u => u.status === 'online').length}</h3>
            <div className="space-y-2">
              {onlineUsers.filter(u => u.status === 'online').map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-sm">
                      {user.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium ${getRoleColor(user.role)} truncate`}>
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                  {getRoleIcon(user.role)}
                </div>
              ))}
            </div>

            {onlineUsers.filter(u => u.status !== 'online').length > 0 && (
              <>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 mt-6">Offline — {onlineUsers.filter(u => u.status !== 'online').length}</h3>
                <div className="space-y-2">
                  {onlineUsers.filter(u => u.status !== 'online').map((user) => (
                    <div key={user.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer opacity-50">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-sm">
                          {user.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-600 truncate">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-400">Offline</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Community;