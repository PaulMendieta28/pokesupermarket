import { StaticImageData } from 'next/image'

export interface ItemPageMenuProps {
  title: string,
  href: string,
  src: string | StaticImageData; 
  alt: string;
  width: number;
};
