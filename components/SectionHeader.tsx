import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-2 mb-3 border-b-2 border-slate-200 pb-1.5">
      <div className="bg-slate-800 p-1 rounded-md text-white">
        <Icon size={16} />
      </div>
      <h2 className="text-lg font-bold text-slate-800 tracking-wide">{title}</h2>
    </div>
  );
};