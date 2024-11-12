import { StaticImageData } from 'next/image'

export interface LinkImageProps { 
    href: string; 
    src: string | StaticImageData; 
    alt: string;
    width: number;
}