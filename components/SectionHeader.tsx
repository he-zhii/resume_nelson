import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-3 mb-4 border-b-2 border-slate-200 pb-2">
      <div className="bg-slate-800 p-1.5 rounded-md text-white">
        <Icon size={18} />
      </div>
      <h2 className="text-xl font-bold text-slate-800 tracking-wide">{title}</h2>
    </div>
  );
};