import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Contact() {
  return (
    <Layout>
      <Seo templateTitle='Contact' description='Contact page' />

      <main>
        <section className='bg-black'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='text-primary-500'>Contact Page</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
