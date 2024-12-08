import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="w-full bg-white py-[32px] px-[60px] flex items-center justify-between border-b border-[#C3D4E966]">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/Logo.png" alt="MORENT" width={116} height={36} />
      </Link>

      {/* Search Bar */}
      <div className="max-w-[492px] w-full relative ml-[70px] mr-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-[48px] pl-[52px] pr-[52px] rounded-[70px] bg-[#F6F7F9] border-0 text-[16px] text-secondary-300 placeholder:text-secondary-300 focus:outline-none focus:ring-1 focus:ring-primary-500/50"
          />
          <Image
            src="/images/search-icon.png"
            alt="Search"
            width={24}
            height={24}
            className="absolute left-[20px] top-1/2 -translate-y-1/2"
          />
          <Image
            src="/images/filter-icon.png"
            alt="Filter"
            width={24}
            height={24}
            className="absolute right-[20px] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-[20px]">
        {/* Like Button */}
        <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-secondary-100 transition-colors">
          <Image
            src="/images/heart-icon.png"
            alt="Like"
            width={24}
            height={24}
          />
        </button>

        {/* Notification Button */}
        <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-secondary-100 transition-colors relative">
          <Image
            src="/images/notification-icon.png"
            alt="Notifications"
            width={24}
            height={24}
          />
          <span className="absolute top-[10px] right-[10px] w-[6px] h-[6px] bg-error-500 rounded-full ring-2 ring-white" />
        </button>

        {/* Settings Button */}
        <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-secondary-100 transition-colors">
          <Image
            src="/images/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
          />
        </button>

        {/* Profile Picture */}
        <button className="w-[44px] h-[44px] flex items-center justify-center">
          <Image
            src="/images/profile-icon.png"
            alt="Profile"
            width={44}
            height={44}
          />
        </button>
      </div>
    </nav>
  );
}
