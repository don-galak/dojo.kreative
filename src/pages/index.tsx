import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import { ProjectCard } from '@/components/ProjectCard';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const t = () => (
  <NextImage
    useSkeleton
    className='w-128 w-128'
    src='/svg/projects/best-start.svg'
    width='360'
    height='360'
    alt='Icon'
  />
);

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' description='Home page' />
      <main>
        <section className='bg-dark'>
          <div className='layout relative flex min-h-screen flex-col items-center py-12 text-center'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h1 className='mt-4 text-white'>
                  Design mastery inspired by the dojo
                </h1>
                <p className='mt-2 text-sm text-white'>
                  Unleash your creative potential with our design agency
                </p>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='primary' className='rounded-full'>
                    Get in touch
                  </Button>
                  <Button variant='outline' isDarkBg className='rounded-full'>
                    Book a mentoring session
                  </Button>
                </div>
              </div>
              <NextImage
                useSkeleton
                className='w-128 w-128'
                src='/svg/red-thing.svg'
                width='360'
                height='360'
                alt='Icon'
              />
            </div>
            <ProjectCard
              backgroundImageProps={{
                src: '/svg/projects/your-growth/background.svg',
                alt: 'Icon',
              }}
              forgroundImageProps={{
                alt: '',
                src: '/svg/projects/your-growth.svg',
              }}
            >
              <p style={{ zIndex: 1 }} className='text-red-500'>
                mou exei spasei ta arxidia
              </p>
            </ProjectCard>

            {/* <NextImage
              useSkeleton
              src='/svg/projects/best-start.svg'
              className='w-128 w-128'
              width='360'
              height='360'
              alt='Icon'
            /> */}
            {/* <NextImage
              useSkeleton
              className='w-128 w-128'
              src='/svg/projects/your-growth.svg'
              width='360'
              height='360'
              alt='Icon'
            /> */}
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/don-galak'>
                Panagiotis Tagkalakis
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
