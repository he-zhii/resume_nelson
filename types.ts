export interface ContactInfo {
  phone: string;
  email: string;
  wechat: string;
  location: string;
}

export interface BasicInfo {
  name: string;
  age: string;
  gender: string;
  degree: string;
  jobTarget: string;
  salary: string;
  availability: string;
}

export interface Education {
  school: string;
  major: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  period: string;
  role?: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  basicInfo: BasicInfo;
  contactInfo: ContactInfo;
  education: Education[];
  workExperience: Experience[];
  projectExperience: Project[];
  skills: SkillCategory[];
  selfEvaluation: string[];
}