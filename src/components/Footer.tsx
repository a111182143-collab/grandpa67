import { motion } from 'motion/react';
import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-mono text-xl font-bold text-brand-blue mb-2">
              &lt;PORTFOLIO /&gt;
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} 學生作品集。使用 React 與 Tailwind 打造。
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors" />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            用心製作 <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 高雄科技大學
          </div>
        </div>
      </div>
    </footer>
  );
}
