import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, ExternalLink, Box, X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

// Import Images
import yuzhengImg from '../yuzheng.jpg';
import originalPhotoImg from '../originalphoto.jpg';

export default function AssetGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const assets = [
    {
      title: 'Yuzheng 形象照',
      image: yuzhengImg,
      type: 'Photo'
    },
    {
      title: '原始照片紀錄',
      image: originalPhotoImg,
      type: 'Photo'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">個人資產安全檢視</h2>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 flex items-center gap-3">
              <ImageIcon className="text-brand-blue" />
              <span className="text-sm font-medium text-brand-dark">點擊圖片即可啟動安全檢視器瀏覽原始檔案</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {assets.map((asset, idx) => (
                <motion.div
                  key={asset.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setSelectedImg(asset.image)}
                >
                  <img 
                    src={asset.image} 
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                    <span className="text-white font-bold">{asset.title}</span>
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Box size={140} />
            </div>
            <div className="relative z-10 font-sans">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                <Box className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-brand-dark tracking-tight">Tripo3D 數位孿生角色</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                這是一個具備高度細節的 3D 人物模型，穿著標誌性的綠黑配色連帽衫。
                您可以透過安全連結進入 Tripo3D 工作區，直接在瀏覽器中進行旋轉、縮放等完整互動體驗。
              </p>
              <a 
                href="https://studio.tripo3d.ai/workspace/generate/humanoid-figure-wearing-green-and-black-hoodie-on-round-base-ab7951ea-9850-4c35-ab7e-34fbc6e34e01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 py-5 px-8 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-blue transition-all group"
              >
                進入 3D 虛擬工作區 <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Full Preview"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
