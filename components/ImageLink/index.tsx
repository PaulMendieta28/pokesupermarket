import { LinkImageProps } from '@/types/ImageLink'
import Image from 'next/image'
import Link from 'next/link'

const ImageLink:React.FC<LinkImageProps> = ({ href, src, alt, width }) => {
  return (
    <Link href={href}>
        <Image src={src} alt={alt} width={width}/>
    </Link>
  )
}

export default ImageLink