"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Elevate Your Tech Journey: Unleash Your Potential with Our Cutting-Edge Online Courses',
      description:
        'Embark on a tech journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our tech school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Diverse Course Catalog',
      description:
        'Access a wide array of tech courses covering programming languages, software development, cybersecurity, AI, and more. Stay ahead of the curve with the latest technologies and industry trends.',
    },
    {
      title: 'Interactive Learning Experience',
      description:
        'Engage in hands-on, interactive learning experiences through coding exercises, projects, and real-world simulations. Foster a dynamic learning environment that promotes skill retention and application.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of tech concepts and performance techniques.',
    },
    {
      title: 'Lifetime Access',
      description:
        'Enjoy lifetime access to course materials, updates, and resources, allowing you to revisit content and stay current with evolving technologies.',
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your tech skills are always advancing.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
