import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'Fixtures', to: '/fixtures' },
  { name: 'Final Fixtures', to: '/fixtures?group=Final' },
  { name: 'Favorites', to: '/favorites' },
];

const socialLinks = [
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060A12] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-10 lg:px-16">
        {/* Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8">

          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 group whitespace-nowrap">
              <Trophy className="w-5 h-5 text-[#7cff4f] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="text-sm font-bold text-white tracking-tight whitespace-nowrap">
                FIFA WC <span className="text-[#7cff4f]">2026</span>
              </span>
            </div>
            <p className="text-sm sm:text-xs text-gray-500 leading-relaxed max-w-xs">
              The 2026 FIFA World Cup brings 48 nations together across the United States, Mexico &amp; Canada for the biggest tournament in football history.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-[#7cff4f] transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-[#7cff4f] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 font-medium">
            &copy; 2026 FIFA World Cup
          </span>
          <span className="text-xs text-gray-500 font-medium">
            Made with ⚽ for fans everywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
