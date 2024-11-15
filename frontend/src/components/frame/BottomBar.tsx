import { useLocation, useNavigate } from 'react-router-dom';
import { Newspaper, MessageCircle } from 'lucide-react';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex items-center justify-around">
      <button
        onClick={() => navigate('/news')}
        className={`flex flex-col items-center p-2 ${
          currentPath === '/news' ? 'text-blue-600' : 'text-gray-600'
        }`}
      >
        <Newspaper size={24} />
        <span className="text-xs mt-1">News</span>
      </button>
      <button
        onClick={() => navigate('/chat')}
        className={`flex flex-col items-center p-2 ${
          currentPath === '/chat' ? 'text-blue-600' : 'text-gray-600'
        }`}
      >
        <MessageCircle size={24} />
        <span className="text-xs mt-1">Chat</span>
      </button>
    </div>
  );
};

export default BottomBar;
