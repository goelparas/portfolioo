'use client';

import React from 'react';
import SectionHeading from './section-heading';
import TinderCard from 'react-tinder-card';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from './3d-card-effect';
import { Drawer, DrawerContent } from './common/Drawer';

export default function MyProjects() {
  const { ref } = useSectionInView('Experience');
  const [detailModal, setDetailModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<number>(0);

  const onSwipe = (direction: any) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + ' left the screen');
  };

  const tinderCards = [
    {
      title: 'Backend-End Developer',
      location: 'Orlando, FL',
      description: 'Worked on the Google Search Engine',
      color: 'bg-green-500',
    },
    {
      title: 'Software Engineer',
      location: 'Google',
      description: 'Worked on the Google Search Engine',
      color: 'bg-red-500',
    },
    {
      title: 'Front-End Developer',
      location: 'Orlando, FL',
      description: 'Worked on the Google Search Engine',
      color: 'bg-blue-500',
    },
  ];
  //localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=2048&q=75

  http: return (
    <section id='projects' ref={ref} className='w-full sm:mb-40'>
      <SectionHeading>Projects</SectionHeading>
      <div className='w-full flex flex-col justify-center items-center h-[100vh]'>
        <div className='w-[300px] h-[450px] lg:w-[400px] lg:h-[550px] relative'>
          {tinderCards.map((card, index) => (
            <TinderCard
              key={index}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen('fooBar')}
              preventSwipe={['up', 'down']}
              className='absolute'
            >
              <div
                className={cn(
                  ' shadow-lg text-black select-none bg-cover bg-center rounded-3xl hover:-translate-y-12 transition-transform duration-300 ease-in-out',
                  card.color,
                  {
                    'rotate-[-4deg]': index === 0,
                    'rotate-[4deg]': index === 1,
                  }
                )}
                style={{
                  transformOrigin: 'center 200%',
                }}
                onClick={() => {
                  setSelectedCard(index);
                  setDetailModal(true);
                }}
              >
                <CardContainer className='inter-var'>
                  <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                    <CardItem
                      translateZ='50'
                      className='text-xl font-bold text-neutral-600 dark:text-white'
                    >
                      {card.title}
                    </CardItem>
                    <CardItem
                      as='p'
                      translateZ='60'
                      className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                    >
                      {card.description}
                    </CardItem>
                    <CardItem
                      as='p'
                      translateZ='60'
                      className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                    >
                      {card.location}
                    </CardItem>
                    <CardItem translateZ='100' className='w-full mt-4'>
                      <Image
                        src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        height='1000'
                        width='1000'
                        className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                        alt='thumbnail'
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <GlassMorphedDrawer open={detailModal} onOpenChange={setDetailModal}>
        <div>
          <p>{tinderCards[selectedCard].title}</p>
          <p>{tinderCards[selectedCard].description}</p>
          <p>{tinderCards[selectedCard].location}</p>
        </div>
      </GlassMorphedDrawer>
    </section>
  );
}

type GlassMorphedDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
};
const GlassMorphedDrawer = ({
  open,
  onOpenChange,
  ...props
}: GlassMorphedDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction='right'>
      <DrawerContent className='h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 '>
        {props.children}
      </DrawerContent>
    </Drawer>
  );
};
