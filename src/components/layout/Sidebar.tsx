"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { name: 'Car Rent', path: '/rent', icon: '🚗' },
    { name: 'Insight', path: '/insight', icon: '📊' },
    { name: 'Reimburse', path: '/reimburse', icon: '💰' },
    { name: 'Inbox', path: '/inbox', icon: '📥' },
    { name: 'Calendar', path: '/calendar', icon: '📅' },
  ];

  const preferencesItems = [
    { name: 'Settings', path: '/settings', icon: '⚙️' },
    { name: 'Help & Center', path: '/help', icon: '❓' },
    { name: 'Dark Mode', path: '#', icon: '🌙' },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-[#F3F5F7]">
      <div className="p-4">
        <Link href="/" className="text-2xl font-bold text-[#3563E9]">MORENT</Link>
        
        <div className="mt-4">
          <h3 className="text-[#90A3BF] text-xs font-medium mb-2">MAIN MENU</h3>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={[
                  'flex items-center gap-3 p-2 rounded-lg transition-colors',
                  pathname === item.path
                    ? 'bg-[#3563E9] text-white'
                    : 'text-[#596780] hover:bg-[#F6F7F9]'
                ].join(' ')}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4">
          <h3 className="text-[#90A3BF] text-xs font-medium mb-2">PREFERENCES</h3>
          <nav className="space-y-1">
            {preferencesItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={[
                  'flex items-center gap-3 p-2 rounded-lg transition-colors',
                  pathname === item.path
                    ? 'bg-[#3563E9] text-white'
                    : 'text-[#596780] hover:bg-[#F6F7F9]'
                ].join(' ')}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-8 left-4 right-4">
          <button
            onClick={() => {/* Add logout functionality */}}
            className="flex items-center gap-3 p-2 rounded-lg text-[#596780] hover:bg-[#F6F7F9] w-full transition-colors"
          >
            <span>🚪</span>
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
