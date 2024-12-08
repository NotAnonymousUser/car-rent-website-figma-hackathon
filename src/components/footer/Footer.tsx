import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white mt-[60px] py-[40px]">
      <div className="container mx-auto px-[60px]">
        <div className="grid grid-cols-[1.5fr,auto,auto,auto] gap-[86px] mb-[40px]">
          {/* About Section */}
          <div className="max-w-[350px]">
            <h2 className="text-[32px] font-bold text-primary-500 mb-4">
              MORENT
            </h2>
            <p className="text-[16px] text-secondary-500 font-jakarta">
              Our vision is to provide convenience
              <br /> and help increase your sales business.
            </p>
          </div>

          {/* About Links */}
          <div className="min-w-[120px]">
            <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta mb-8">
              About
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/bussiness-relation"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Bussiness Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="min-w-[120px]">
            <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta mb-8">
              Community
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/events"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/invite-a-friend"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Links */}
          <div className="min-w-[120px]">
            <h3 className="text-[20px] font-semibold text-secondary-500 font-jakarta mb-8">
              Socials
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/discord"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="/instagram"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="/facebook"
                  className="text-[16px] text-secondary-300 font-jakarta"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-[40px] border-t border-[#13182533]">
          <p className="text-[16px] text-secondary-500 font-jakarta">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex gap-[60px]">
            <Link
              href="/privacy-policy"
              className="text-[16px] text-secondary-500 font-jakarta"
            >
              Privacy & Policy
            </Link>
            <Link
              href="/terms"
              className="text-[16px] text-secondary-500 font-jakarta"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
