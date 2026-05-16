import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import avatarImg from '../IMG_5600.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '工作經歷', href: '#experience' },
    { name: '精選專案', href: '#projects' },
    { name: '專業技能', href: '#skills' },
    { name: '聯絡方式', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border-2 border-brand-blue shadow-sm bg-gray-100"
          >
            <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-xl font-bold text-brand-blue hidden sm:block mt-2"
          >
            &lt;PORTFOLIO /&gt;
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-brand-blue transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l pl-8 border-gray-200">
            <Github className="w-5 h-5 cursor-pointer hover:text-brand-blue transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-brand-blue transition-colors" />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-8 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
