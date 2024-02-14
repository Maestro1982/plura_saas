import Image from 'next/image';
import Link from 'next/link';

import { User } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

import { navLinks } from '@/constants/constants';

import { ModeToggle } from '@/components/global/mode-toggle';

type NavigationProps = {
  user?: null | User;
};

const Navigation = ({ user }: NavigationProps) => {
  return (
    <div className='flex p-4 items-center justify-between relative'>
      <aside className='flex items-center gap-2'>
        <Image
          src='./assets/plura-logo.svg'
          alt='plura logo'
          width={40}
          height={40}
        />
        <span className='text-xl font-bold'>Plura.</span>
      </aside>
      <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
          {navLinks.map((navLink) => (
            <Link href='#' key={navLink}>
              {navLink}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        <Link
          href='/agency'
          className='bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition-all'
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};
export default Navigation;
