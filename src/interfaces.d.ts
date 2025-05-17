interface NavItemProps {
    title: string;
    icon: any;
    link?: string;
    dropdown?: boolean;
    subMenu?: NavItemProps[];
    divider?: boolean;
    section?: string;
    color?: string;
    scrollTo?: { base: number; sm?: number; md?: number; lg?: number };

}

interface Slide {
    url: string;
    
  }
  