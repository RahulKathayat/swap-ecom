import React, { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react';
import { Footer } from '@/widgets/layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export function IntegrationDocs() {
  return (
    <>
        <section className="relative block h-[12vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
        <div className=' h-[90vh] w-[100vw] p-10 flex items-center flex-col gap-4'>
          <Typography variant='h1'>Integration</Typography>
          <Typography variant='lead' className='mt-5 scale-110'>We support a few ecommerce solution for integrating Swap Envi to your website : </Typography>
          <Typography variant='lead' className='mt-5 font-bold'>1. <a href='/docs/shopify' 
          className=' text-blue-800'>Shopify</a></Typography>
          <Typography variant='lead' className='mt-5 font-bold'>2. <a href='/docs/nonshopify' 
          className=' text-blue-800'>Non Shopify</a></Typography>
          <Typography variant='lead' className='mt-10 max-w-6xl text-center'>If your ecommerce platform is not listed above and/or you would prefer to have more flexibility, please consult the Direct Integration. Although this option offers more flexibility, it is a bit more technical than the ecommerce integrations.</Typography>
          <Typography variant='lead' className='mt-10 px-10 py-5 max-w-5xl text-center
           bg-blue-100 text-blue-800 scale-110 rounded-lg'>
            Note :<div/>
            If you find that the Direct Integration does not work with an ecommerce platform that is not listed above, please contact us at swap@envi.com.
          </Typography>
        </div>
        <div className="bg-white">
            <Footer/>
        </div>
    </>
  )
}

export default IntegrationDocs
