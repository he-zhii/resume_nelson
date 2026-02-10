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
import { PhotoUpload } from './PhotoUpload';

export const Resume: React.FC = () => {
  const { basicInfo, contactInfo, education, workExperience, skills, selfEvaluation } = RESUME_DATA;

  return (
    <div id="resume-content" className="w-[210mm] h-[297mm] mx-auto bg-white shadow-2xl print:shadow-none p-[15mm] text-slate-700 relative overflow-hidden box-border">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-slate-800 print:bg-slate-800"></div>

      {/* Header Section */}
      <header className="flex flex-row justify-between items-start gap-4 mb-4 pb-4 border-b border-slate-200">
        <div className="flex-1">
          {/* 姓名 + 职位 - 完美居中对齐 */}
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">{basicInfo.name}</h1>
            <span className="inline-flex items-center bg-slate-800 text-white px-3 h-6 rounded text-sm font-medium leading-none">{basicInfo.jobTarget}</span>
          </div>

          {/* 个人信息 - 使用 Table 布局确保导出稳定 */}
          <table className="text-xs border-collapse">
            <tbody>
              <tr>
                <td className="py-1 pr-6">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <User size={12} className="text-slate-400" />
                    <span>{basicInfo.gender} | {basicInfo.age} | {basicInfo.degree}</span>
                  </div>
                </td>
                <td className="py-1 pr-6">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin size={12} className="text-slate-400" />
                    <span>{contactInfo.location}</span>
                  </div>
                </td>
                <td className="py-1 pr-6">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Banknote size={12} className="text-slate-400" />
                    <span>{basicInfo.salary}</span>
                  </div>
                </td>
                <td className="py-1">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock size={12} className="text-slate-400" />
                    <span>到岗：{basicInfo.availability}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-1 pr-6">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Phone size={12} className="text-slate-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                </td>
                <td className="py-1 pr-6">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Mail size={12} className="text-slate-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                </td>
                <td className="py-1" colSpan={2}>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MessageCircle size={12} className="text-slate-400" />
                    <span>微信：{contactInfo.wechat}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Photo Upload - Right Side */}
        <PhotoUpload />
      </header>

      <div className="grid grid-cols-12 gap-5">

        {/* Left Column (Main Content) - 7/12 width */}
        <div className="col-span-7 space-y-4">

          {/* Work Experience */}
          <section>
            <SectionHeader icon={Briefcase} title="工作经历" />
            <div className="space-y-3">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-3 border-l-2 border-slate-200">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                  <div className="flex flex-row justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-800 text-base">{job.role}</h3>
                    <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{job.period}</span>
                  </div>
                  <div className="text-slate-700 font-medium text-sm mb-1.5">{job.company}</div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-600 leading-relaxed">
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
            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <div className="flex flex-row justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-800 text-sm">印尼人造草坪市场调研（自主）</h3>
                <span className="text-xs font-medium text-slate-500 bg-white px-2 py-0.5 rounded">2026.2</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-600 leading-relaxed">
                <li>结合企业实际情况，完成印尼市场分析报告，涵盖市场规模、竞争格局、客户画像、准入门槛等板块</li>
                <li>撰写客户开发信Demo，运用AI工具辅助调研与写作</li>
              </ul>
            </div>
          </section>

          {/* Self Evaluation */}
          <section>
            <SectionHeader icon={User} title="自我评价" />
            <ul className="space-y-1.5">
              {selfEvaluation.map((item, index) => {
                const [title, content] = item.split('：');
                return (
                  <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">
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
        <div className="col-span-5 space-y-4">

          {/* Education */}
          <section>
            <SectionHeader icon={GraduationCap} title="教育背景" />
            <div className="space-y-2">
              {education.map((edu, index) => (
                <div key={index} className="pb-3 border-b border-slate-100 last:border-0">
                  <div className="font-bold text-slate-800 text-sm">{edu.school}</div>
                  <div className="text-xs text-slate-600 mb-0.5">{edu.major} | {edu.degree}</div>
                  <div className="text-xs text-slate-400 mb-2">{edu.period}</div>
                  <div className="text-xs">
                    {edu.achievements.map((ach, i) => (
                      <span key={i} className="inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded mr-1 mb-1 whitespace-nowrap">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionHeader icon={Cpu} title="技能特长" />
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-bold text-slate-700 text-xs mb-1.5 flex items-center gap-2">
                    <span className="w-1 h-3 bg-slate-300 rounded-full"></span>
                    {skill.category}
                  </h4>
                  <div>
                    {skill.items.map((item, i) => (
                      <p key={i} className="text-xs text-slate-600 leading-relaxed bg-slate-50 px-2 py-1 rounded border border-slate-100 mb-1 last:mb-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honors */}
          <section className="bg-slate-800 text-white p-3 rounded-lg shadow-sm print:bg-slate-800">
            <h3 className="font-bold text-xs mb-2 flex items-center gap-2 leading-none">
              <Award size={12} className="flex-shrink-0" />
              <span>核心竞争力</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-200 leading-normal">
              <li className="flex items-start gap-1.5">
                <span className="flex-shrink-0">•</span>
                <span>英语 CET-6 (448分)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="flex-shrink-0">•</span>
                <span>熟练运用 AI (Claude/DeepSeek)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="flex-shrink-0">•</span>
                <span>计算机背景 + 销售经验</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="flex-shrink-0">•</span>
                <span>熟悉外贸开发信写作</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};