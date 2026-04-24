import { motion } from 'motion/react';
import { Target, Monitor, Award } from 'lucide-react';

const skillCategories = [
  {
    title: '專業技能',
    icon: Target,
    skills: ['顧客關係管理 (CRM)', '品牌行銷企劃', '電商官網營運管理'],
  },
  {
    title: '電腦與語言',
    icon: Monitor,
    skills: ['英文 (精通)', '辦公應用軟體', '專案管理軟體'],
  },
  {
    title: '專業資格',
    icon: Award,
    skills: ['航海專業證照'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">技能與證照</h2>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-brand-blue/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <category.icon className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
