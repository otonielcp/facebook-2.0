/** @format */

import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from '@heroicons/react/solid';
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/client';

function Header() {
	const [session] = useSession();

	return (
		<header className='sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5'>
			{/* Left */}
			<div className='flex items-center'>
				<Image
					src='https://links.papareact.com/5me'
					width='40'
					height='40'
					layout='fixed'
				/>
				<div className='items-center hidden p-2 ml-2 bg-gray-100 rounded-full md:inline-flex'>
					<SearchIcon className='h-6 text-gray-600' />
					<input
						className='flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none lg:inline-flex'
						placeholder='Search Facebook'
					/>
				</div>
			</div>

			{/* Center */}
			<div className='flex justify-center flex-grow'>
				<div className='flex space-x-6 md:space-x-2'>
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>

			{/* Right */}
			<div className='flex items-center justify-end sm:space-x-2'>
				<Image
					onClick={() => signOut()}
					className='rounded-full cursor-pointer'
					src={session.user.image}
					width='40'
					height='40'
					layout='fixed'
				/>
				<p className='hidden pr-3 text-sm font-semibold lg:inline-flex whitespace-nowrap'>
					{session.user.name}
				</p>
				<ViewGridIcon className='icon' />
				<ChatIcon className='icon' />
				<BellIcon className='icon' />
				<ChevronDownIcon className='icon' />
			</div>
		</header>
	);
}

export default Header;
