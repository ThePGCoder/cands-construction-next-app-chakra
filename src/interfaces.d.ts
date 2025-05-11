interface NavItemProps {
    title: string;
    icon: any;
    link?: string;
    dropdown?: boolean;
    subMenu?: NavItemProps[];
    divider?: boolean;
    section?: string;
    color?: string;
    scrollTo?: number;
}

interface Slide {
    url: string;
    caption?: string; // Optional caption
  }
  