import { useRouter } from 'next/router';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className='sticky top-0 z-50 bg-black'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='font-bold hover:text-gray-600'
          style={{ display: 'flex' }}
        >
          <NextImage
            useSkeleton
            className='w-8 md:w-10'
            src='/svg/dojo-logo.svg'
            width='180'
            height='180'
            alt='Icon'
          />
          <p
            className='text-primary-500'
            style={{ marginLeft: '5px', marginTop: '5px' }}
          >
            dojo.kreative
          </p>
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsxm(
                    'hover:text-primary-300',
                    'text-gray-600',
                    pathname === href && ['text-primary-500']
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
