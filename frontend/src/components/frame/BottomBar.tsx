import { useLocation, useNavigate } from 'react-router-dom';
import { Newspaper, MessageCircle, LucideIcon } from 'lucide-react';

// Define navigation item interface
interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

// Navigation configuration
const navItems: NavItem[] = [
  {
    path: '/news',
    icon: Newspaper,
    label: 'News'
  },
  {
    path: '/chat',
    icon: MessageCircle,
    label: 'Chat'
  }
];

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex items-center justify-around h-[var(--bottombar-h)]">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center p-2 ${
            currentPath === item.path 
              ? 'text-black font-bold scale-110' 
              : 'text-gray-400'
          }`}
        >
          <item.icon size={currentPath === item.path ? 28 : 24} />
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomBar;
