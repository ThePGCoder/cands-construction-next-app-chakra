interface NavItemProps {
    title: string;
    icon: any;
    link?: string;
    dropdown?: boolean;
    subMenu?: NavItemProps[];
    divider?: boolean;
    section?: string;
    color?: string;
}

interface Slide {
    url: string;
    caption?: string; // Optional caption
  }
  