'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
          title: 'Web Development Trends',
          description:
            'Dive into the evolving world of web development, featuring discussions on the latest technologies, frameworks, and design principles shaping the future of online experiences.',
          slug: 'web-development-trends',
          isFeatured: true,
        },
        {
          title: 'Mastering Machine Learning',
          description:
            'Join industry experts as they unravel the complexities of machine learning, covering everything from fundamentals to real-world applications.',
          slug: 'mastering-machine-learning',
          isFeatured: true,
        },
        {
          title: 'Cybersecurity in a Connected World',
          description:
            'Explore the latest trends in cybersecurity with hands-on demonstrations and expert insights, equipping you to protect yourself and your organization in the digital landscape.',
          slug: 'cybersecurity-in-a-connected-world',
          isFeatured: true,
        },
        {
          title: 'Cloud Computing Unleashed',
          description:
            'Learn from cloud computing experts about leveraging cloud services to optimize efficiency, scalability, and innovation in your tech projects.',
          slug: 'cloud-computing-unleashed',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Data Science Deep Dive',
          description:
            'Explore the world of data science in this comprehensive webinar, covering data analysis techniques, machine learning applications, and the impact of data-driven decision-making.',
          slug: 'data-science-deep-dive',
          isFeatured: true,
        },
        {
          title: 'DevOps in Action',
          description:
            'Witness live demonstrations and case studies showcasing the principles and practices of DevOps, and how it accelerates software delivery and improves collaboration.',
          slug: 'devops-in-action',
          isFeatured: true,
        },
      ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className='text-center'>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Tech Journey</p>
        </div>

        <div className='mt-10'>
            <HoverEffect
            items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/'
                }
            ))}
            />
        </div>

        <div className='mt-10 text-center'>

          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>

        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
