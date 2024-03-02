'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicTestimonials = [
    {
      quote:
        'I started with minimal coding knowledge and enrolled in their programming courses. Completed the app development program, and now my app has thousands of downloads and positive reviews!',
      name: 'Alex Johnson',
      title: 'App Development Student',
    },
    {
      quote:
        "I joined their cybersecurity certification program to delve into ethical hacking and network security. Now, I'm working as a junior cybersecurity analyst with a top tech firm thanks to the skills I acquired.",
      name: 'Samantha Lee',
      title: 'Cyber Security Student',
    },
    {
      quote:
        "Immersed myself in AI and machine learning courses, gaining practical skills. Now, I'm working as a machine learning engineer at a prominent tech company, turning my passion into a profession.",
      name: 'Michael Chen',
      title: 'Machine Learning Student',
    },
    {
      quote:
        'Transitioned from a non-tech background to the IT industry with their career transition program. Landed a role as a junior software developer at a startup, proving that career shifts are possible.',
      name: 'Emily Taylor',
      title: 'Web Development Student',
    },
    {
      quote:
        'Dived into blockchain courses to understand the future of finance. Now actively contributing to blockchain projects, influencing the financial landscape with distributed ledger technology.',
      name: 'Chris Morales',
      title: 'Blockchain Student',
    },
  ];

function TestimonialCards() {
    
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

      <h2 className="text-3xl font-bold text-center mb-8 z-10">Unlock Success: Witness the Achievements of Our Learners</h2>

      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
          items={musicTestimonials}
          direction="right"
          speed="slow"
          />
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialCards
