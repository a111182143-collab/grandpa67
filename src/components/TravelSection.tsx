import { motion, AnimatePresence } from 'motion/react';
import { FileText, ExternalLink, Eye, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Import PDFs
import pdf1 from '../a5mun73gwlpsjar.pdf';
import pdf2 from '../2026 清明連假旅遊規劃提案.pdf';
import pdf3 from '../2026 Central Taiwan Spring Journey.pdf';

const travelPdfs = [
  {
    title: '旅遊規劃提案 (a5mun)',
    file: pdf1,
    description: '詳細的行程規劃與預算編列。'
  },
  {
    title: '2026 清明連假旅遊規劃提案',
    file: pdf2,
    description: '針對清明連假的專屬旅遊提案。'
  },
  {
    title: '2026 Central Taiwan Spring Journey',
    file: pdf3,
    description: '中台灣春季之旅英文版規劃。'
  }
];

export default function TravelSection() {
  const [activePdf, setActivePdf] = useState<string>(travelPdfs[0].file);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  useEffect(() => {
    setPageNumber(1);
    setScale(1.0);
  }, [activePdf]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <section id="travel" className="py-24 px-4 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-brand-blue/10 p-3 rounded-2xl">
            <FileText className="text-brand-blue w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">旅遊規劃研究室</h2>
            <p className="text-gray-500 text-sm">安全存取受保護的 PDF 專案規劃檔案</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent ml-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 min-h-[700px]">
          {/* File Browser Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {travelPdfs.map((pdf, idx) => (
              <motion.div
                key={pdf.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActivePdf(pdf.file)}
                className={`group p-6 rounded-[2rem] border transition-all cursor-pointer flex items-start gap-4 ${
                  activePdf === pdf.file 
                  ? 'bg-brand-blue text-white border-brand-blue shadow-xl ring-4 ring-brand-blue/10' 
                  : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-brand-blue/30 hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  activePdf === pdf.file ? 'bg-white/20' : 'bg-brand-blue/10 text-brand-blue'
                }`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1 leading-snug">{pdf.title}</h3>
                  <p className={`text-xs ${activePdf === pdf.file ? 'text-white/80' : 'text-gray-500'}`}>
                    {pdf.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                      activePdf === pdf.file ? 'bg-white/20' : 'bg-gray-100 text-gray-400'
                    }`}>
                      Security Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-auto p-6 bg-brand-dark/5 rounded-3xl border border-dashed border-gray-200">
                <div className="flex items-center gap-3 mb-2 text-brand-dark">
                    <Eye size={18} />
                    <span className="text-sm font-bold">安全預覽須知</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                    所有檔案皆透過加密通道傳輸。直接檢視模式可防止第三方外掛程式存取敏感內容。
                </p>
            </div>
          </div>

          {/* Main Safe Reader Area */}
          <div className="lg:col-span-8">
            <div className="w-full h-full rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col bg-gray-900 group">
              <div className="p-5 bg-white border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/20 group-hover:bg-red-400 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 group-hover:bg-yellow-400 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-400/20 group-hover:bg-green-400 transition-colors" />
                  </div>
                  <div className="h-4 w-px bg-gray-200 mx-2" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-400 uppercase">
                    Document Safe Viewer v2.0
                  </span>
                </div>
                <div className="flex items-center gap-4">
                    <a 
                      href={activePdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
                    >
                        來源檢視 <ExternalLink size={12} />
                    </a>
                </div>
              </div>
              
              <div className="flex-grow bg-gray-100 relative h-full min-h-[500px] overflow-hidden flex flex-col">
                <div className="flex-1 overflow-auto flex justify-center py-8 bg-gray-200">
                  <Document
                    file={activePdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex flex-col items-center"
                    loading={
                      <div className="flex flex-col items-center justify-center p-12 text-gray-500 h-full">
                        <span className="animate-pulse font-mono tracking-widest text-sm uppercase">Loading Secure Document...</span>
                      </div>
                    }
                    error={
                      <div className="flex flex-col items-center justify-center p-12 text-red-500 h-full max-w-sm text-center">
                        <span className="font-bold mb-2">檔案安全載入失敗</span>
                        <span className="text-sm">您的瀏覽器可能阻擋了載入，請直接點擊上方「來源檢視」或下載。</span>
                      </div>
                    }
                  >
                    <Page 
                      pageNumber={pageNumber} 
                      scale={scale} 
                      renderTextLayer={true} 
                      renderAnnotationLayer={true}
                      className="shadow-2xl"
                    />
                  </Document>
                </div>
                
                {numPages && (
                  <div className="p-3 bg-brand-dark flex justify-between items-center text-white border-t border-white/10 shrink-0">
                    <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setPageNumber(p => Math.max(1, p - 1))} 
                          disabled={pageNumber <= 1} 
                          className="p-1.5 hover:bg-white/10 rounded-lg disabled:opacity-30 transition-colors"
                        >
                          <ChevronLeft size={18}/>
                        </button>
                        <span className="text-sm font-mono tracking-widest px-2">PG {pageNumber} / {numPages}</span>
                        <button 
                          onClick={() => setPageNumber(p => Math.min(numPages, p + 1))} 
                          disabled={pageNumber >= numPages} 
                          className="p-1.5 hover:bg-white/10 rounded-lg disabled:opacity-30 transition-colors"
                        >
                          <ChevronRight size={18}/>
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setScale(s => Math.max(0.5, s - 0.2))} 
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <ZoomOut size={16}/>
                        </button>
                        <span className="text-xs font-mono w-12 text-center">{Math.round(scale * 100)}%</span>
                        <button 
                          onClick={() => setScale(s => Math.min(2.5, s + 0.2))} 
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <ZoomIn size={16}/>
                        </button>
                        <div className="w-px h-4 bg-white/20 mx-2" />
                        <a 
                          href={activePdf} 
                          download
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                          title="安全下載"
                        >
                          <Download size={16} />
                        </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
