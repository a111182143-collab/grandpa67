import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: '資金周轉',
    company: '卓鮑國際',
    period: '2019 ~ 現在',
    description: '負責公司營運資金配置、金流管理統籌與財務風險控管，確保公司營運周轉順利進行。',
  },
  {
    role: 'DJ偉翔',
    company: 'X娛樂有限公司',
    period: '2016.11 ~ 2019.02',
    description: '擔任專業DJ，負責活動音樂策劃與現場氣氛掌控，具備良好的人群互動與舞台魅力。',
  },
  {
    role: '行銷人員 (後移本部)',
    company: '偉志牌',
    period: '2014.02 ~ 2016.08',
    description: '策劃品牌行銷活動，執行推廣專案，建立並維繫顧客關係，提升品牌市場知名度與黏著度。',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">工作經歷</h2>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div className="mb-2 md:mb-0 md:text-right">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-mono font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="absolute hidden md:block w-4 h-4 bg-brand-blue rounded-full -left-10 top-8 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
                  <div className="flex items-center gap-2 text-brand-blue font-bold mb-1">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{exp.role}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-[31.5%] lg:left-[32.5%] top-[120px] bottom-0 w-px bg-gray-200 -z-10" />
        </div>
      </div>
    </section>
  );
}
