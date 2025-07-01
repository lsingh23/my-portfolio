export interface Skill {
  name: string;
  level?: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface SkillBarProps {
  skill: Skill;
  index: number;
}