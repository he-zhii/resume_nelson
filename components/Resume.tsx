import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Cpu, 
  Award,
  MessageCircle,
  Clock,
  Banknote
} from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Resume: React.FC = () => {
  const { basicInfo, contactInfo, education, workExperience, projectExperience, skills, selfEvaluation } = RESUME_DATA;

  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-8 md:p-12 text-slate-700 relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-slate-800 print:bg-slate-800"></div>

      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 pb-8 border-b border-slate-200">
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{basicInfo.name}</h1>
            <p className="text-xl text-slate-600 font-medium flex items-center gap-2">
              <span className="bg-slate-100 px-3 py-1 rounded text-slate-800">{basicInfo.jobTarget}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <User size={14} className="text-slate-400" />
              <span>{basicInfo.gender} | {basicInfo.age} | {basicInfo.degree}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin size={14} className="text-slate-400" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Phone size={14} className="text-slate-400" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Mail size={14} className="text-slate-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MessageCircle size={14} className="text-slate-400" />
              <span>{contactInfo.wechat}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Banknote size={14} className="text-slate-400" />
              <span>{basicInfo.salary}</span>
            </div>
             <div className="flex items-center gap-2 text-slate-600 col-span-2">
              <Clock size={14} className="text-slate-400" />
              <span>到岗时间：{basicInfo.availability}</span>
            </div>
          </div>
        </div>

        {/* Photo Box - Right Side */}
        <div className="shrink-0">
          <div className="w-32 h-40 border-2 border-slate-200 bg-slate-50 rounded-sm flex flex-col items-center justify-center text-slate-300 relative overflow-hidden group shadow-sm">
            <User size={48} className="mb-2 text-slate-300" />
            <span className="text-xs font-medium uppercase tracking-wider">一寸照片</span>
            <div className="absolute inset-0 border-4 border-white opacity-50"></div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column (Main Content) - 7/12 width */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Work Experience */}
          <section>
            <SectionHeader icon={Briefcase} title="工作经历" />
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="font-bold text-slate-800 text-lg">{job.role}</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{job.period}</span>
                  </div>
                  <div className="text-slate-700 font-medium mb-2">{job.company}</div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 leading-relaxed">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Project Experience */}
          <section>
            <SectionHeader icon={FolderGit2} title="项目经历" />
            <div className="space-y-6">
              {projectExperience.map((project, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="font-bold text-slate-800">{project.name}</h3>
                    <span className="text-sm text-slate-500">{project.period}</span>
                  </div>
                  {project.role && <div className="text-sm text-slate-500 mb-2 italic">角色：{project.role}</div>}
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 leading-relaxed">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

           {/* Self Evaluation */}
          <section>
            <SectionHeader icon={User} title="自我评价" />
             <ul className="space-y-3">
              {selfEvaluation.map((item, index) => {
                const [title, content] = item.split('：');
                return (
                  <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>
                      {content ? (
                        <>
                          <span className="font-bold text-slate-800">{title}：</span>
                          {content}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

        </div>

        {/* Right Column (Sidebar) - 5/12 width */}
        <div className="md:col-span-4 space-y-8">
          
          {/* Education */}
          <section>
            <SectionHeader icon={GraduationCap} title="教育背景" />
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="pb-4 border-b border-slate-100 last:border-0">
                  <div className="font-bold text-slate-800">{edu.school}</div>
                  <div className="text-sm text-slate-600 mb-1">{edu.major} | {edu.degree}</div>
                  <div className="text-xs text-slate-400 mb-3">{edu.period}</div>
                  <div className="space-y-1">
                    {edu.achievements.map((ach, i) => (
                      <div key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded inline-block mr-1 mb-1">
                        {ach}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionHeader icon={Cpu} title="技能特长" />
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-bold text-slate-700 text-sm mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-slate-300 rounded-full"></span>
                    {skill.category}
                  </h4>
                  <div className="space-y-2">
                     {skill.items.map((item, i) => (
                       <p key={i} className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2 rounded border border-slate-100">
                         {item}
                       </p>
                     ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honors (Extracted from Education/Skills for emphasis if needed, but kept compact here) */}
          <section className="bg-slate-800 text-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <Award size={16} /> 核心竞争力
            </h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>• 英语 CET-6 (443分)</li>
              <li>• 熟练运用 AI (Claude/DeepSeek)</li>
              <li>• 计算机背景 + 销售经验</li>
              <li>• 熟悉外贸开发信写作</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};