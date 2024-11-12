import Link from 'next/link'
import React from 'react'
import HeaderAuth from "@/components/AuthButtons";
import ImageLink from '../ImageLink';
import LogoHome from '@/utils/assets/poke market.png';

const Header = () => {
	return (
		<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
			<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
				<div className="flex gap-5 items-center font-semibold">
					<ImageLink href='/' alt='Home' src={LogoHome} width={85}/>
				</div>
 				<HeaderAuth />
			</div>
		</nav>
	)
}

export default Header