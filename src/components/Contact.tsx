import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">聯絡我</h2>
            <p className="text-gray-600 mb-8">
              歡迎任何專案合作、實習機會或技術交流。請透過以下任何方式與我聯絡！
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">電子郵件</div>
                  <div className="font-medium font-mono text-sm">a111182143@nkust.edu.tw</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <MessageSquare />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">社群連結</div>
                  <div className="font-medium">LinkedIn / Twitter / Github</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="王小明"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">電子郵件</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="ming@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">訊息</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="我能如何幫助您？"
                />
              </div>
              <button className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-blue transition-all flex items-center justify-center gap-2 group">
                傳送訊息 <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
