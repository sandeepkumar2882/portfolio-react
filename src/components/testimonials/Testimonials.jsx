import React from 'react';
import SwiperCore, { Autoplay,Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  SwiperCore.use([Autoplay]);
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/',
      name: 'Nick Nripendra',
      role: 'Web Developer. JavaScript | WordPress | PHP | Node | React |',
      test: 'Sandeep Kumar consistently demonstrates exceptional teamwork, always willing to collaborate and share his expertise to help achieve common goals. His positive attitude and approachable nature make him a valuable asset to our team.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/',
      name: 'Austin Ankur',
      role: 'Full-stack developer | Laravel & Vue Specialist',
      test: "I appreciate Sandeep Kumar's strong work ethic and dedication to quality. His attention to detail is commendable, and he consistently delivers high-caliber work, which has positively impacted the success of our projects.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/',
      name: 'Harrison Harshit',
      role: 'Front End Developer JavaScript | Vue | Html&Css .',
      test: 'Sandeep Kumar is an excellent communicator, always keeping the team well-informed and engaged. His effective communication skills contribute to a positive and productive work environment, fostering better understanding and collaboration among team members.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/',
      name: 'Newton Varun',
      role: 'Web Developer. JavaScript | WordPress | React | PHP.',
      test: "Sandeep Kumar's leadership qualities shine through in his ability to motivate and inspire others. He leads by example, showcasing a strong commitment to excellence that encourages his colleagues to strive for their best. His leadership style creates a positive and empowering atmosphere.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/',
      name: 'Leslie Parul',
      role: 'Project Coordinator',
      test: "Sandeep Kumar is a quick learner and consistently seeks opportunities for professional growth. His proactive approach to acquiring new skills and knowledge not only benefits himself but also enhances the overall capabilities of our team. His commitment to continuous improvement is truly commendable.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/',
      name: 'Arlan Aadarsh',
      role: 'Network Cloud Engineer',
      test: "Sandeep Kumar's positive energy is contagious, creating a pleasant and enjoyable work environment. His optimistic outlook and willingness to lend a helping hand make him a joy to work with. Sandeep's ability to uplift the spirits of those around him contributes to a cohesive and supportive team dynamic.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my colleague</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
        >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="testimonial box-shadow" key={testimonial.id}>
          <div className="client__avatar">
            <a href={testimonial.link}>
            {testimonial.name}
            </a>
          </div>
          <h5 className='client__name'>{testimonial.role}</h5>
          <small className="client__review">{testimonial.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials;