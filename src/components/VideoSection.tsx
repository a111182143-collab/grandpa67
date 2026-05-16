import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import travelVideo from '../irs_1774943801273cc2bac12b9688f915100b2ae42c868824e053.mp4';

export default function VideoSection() {
  return (
    <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-brand-blue/10 p-3 rounded-2xl">
            <PlayCircle className="text-brand-blue w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">旅遊規劃影音紀錄</h2>
            <p className="text-gray-500 text-sm">直接在網頁中檢視旅遊相關影音資源</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-4" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-xl bg-black relative"
        >
          <div className="aspect-video w-full">
            <video 
              src={travelVideo} 
              controls 
              className="w-full h-full object-contain"
              preload="metadata"
            >
              您的瀏覽器不支援影片播放。
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
