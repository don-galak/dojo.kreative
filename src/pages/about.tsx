import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' description='About page' />

      <main>
        <section className='bg-black'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='text-primary-500'>About Page</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
