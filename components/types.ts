export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
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
