import { IconLinkProps } from '@/types/IconLink'
import Link from 'next/link'

const IconLink:React.FC<IconLinkProps> = ({ href, children, title, customClass }) => {
  return (
    <Link href={href} className={customClass}>
        {children}
        <h3>{title}</h3>
    </Link>
  )
}

export default IconLink