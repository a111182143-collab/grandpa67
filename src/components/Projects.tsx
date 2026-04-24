import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '電商夏日瘋狂購物季',
    description: '負責行銷策劃與專案執行，透過社群平台與官網活動，成功帶動夏日買氣與轉換率。',
    tech: ['活動企劃', '電商營運', '社群行銷'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: '設計的美 - 合作手帳日曆',
    description: '跨界合作專案，參與設計美學溝通與產品文案撰寫，打造具質感的年度手帳日曆。',
    tech: ['專案管理', '產品企劃', '品牌合作'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">專案作品</h2>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
