import { motion } from 'motion/react';
import { ArrowRight, Anchor, Briefcase, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold mb-6">
              高科大航海科 (NKUST)
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              林毓峰 (浩偉) <br />
              <span className="text-brand-blue text-3xl md:text-5xl">多元跨域 航向未來</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              結合航海專業知識與豐富的品牌行銷、專案營運經驗。具備靈活的資金統籌與顧客關係管理能力，致力於在每個停泊的港口創造價值。
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-brand-dark text-white rounded-lg font-medium hover:bg-brand-blue transition-all flex items-center gap-2">
                我的經歷 <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-gray-200 rounded-lg font-medium hover:border-brand-blue transition-all">
                作品集
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Abstract Tech Visual */}
            <div className="w-full aspect-square max-w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 glow relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20">
                    O C E A N S <br />
                    M A R K E T
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-4">
                        <div className="h-2 w-3/4 bg-gray-100 rounded" />
                        <div className="h-2 w-1/2 bg-gray-100 rounded" />
                        <div className="h-2 w-5/6 bg-brand-blue/20 rounded" />
                        <div className="h-2 w-2/3 bg-gray-100 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                            <Anchor className="text-brand-blue" />
                            <span className="font-mono text-xs">航海專業</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                            <TrendingUp className="text-brand-blue" />
                            <span className="font-mono text-xs">電商行銷</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 p-6 bg-white rounded-xl shadow-xl border border-gray-100"
            >
              <div className="text-2xl font-bold">5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">年實務經驗</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
