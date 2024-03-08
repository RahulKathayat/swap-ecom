import React from 'react'
import { Typography } from '@material-tailwind/react';
import SubscriptionCard from '@/widgets/cards/subscription-card';
import { Footer } from '@/widgets/layout';
const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/logos/logo-dropbox.png',
    title: 'Dropbox',
    downloads: '594',
    price:'$9.99/month',
    plan:'Basic Plan',
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/logos/logo-medium.png',
    title: 'Medium Corporation',
    downloads: '625',
    price:'$19.99/month',
    plan:'Standard Plan',
  },
];
export function Subscription() {
  const subscriptions = [
    {
      id: '1',
      createdAt: '27/03/2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'Dropbox',
      downloads: '594',
      price:'$9.99/month',
      plan:'Basic Plan',
    },
    {
      id: '2',
      createdAt: '31/03/2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      logo: '/assets/logos/logo-medium.png',
      title: 'Medium Corporation',
      downloads: '625',
      price:'$19.99/month',
      plan:'Standard Plan',
    },
    {
      id: '3',
      createdAt: '31/03/2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      logo: '/assets/logos/logo-medium.png',
      title: 'Medium Corporation',
      downloads: '625',
      price:'$29.99/month',
      plan:'Premium Plan',
    },
  ];
  return (
    <>
        <section className="relative block h-[12vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
        <Typography variant='h3' align='center' className='mt-10 mb-10'>Paid Plans</Typography>
        <div className='flex flex-wrap h-full w-full justify-center items-center gap-20 p-5 mb-16'>

          {subscriptions.map((subscription) => (
              <SubscriptionCard subscription={subscription} key={subscription.id} />
          ))}
        </div>
        <div className="bg-white">
        <Footer/>
      </div>
    </>
  )
}

export default Subscription