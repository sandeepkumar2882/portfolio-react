import React from 'react';

import './portfolio.css';

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      title: 'Capricorncorp',
      technologies: 'WordPress | Elementor',
      link: 'https://capricorncorp.com/',
      github: '',
    },
    {
      id: 2,
      title: 'RREACH',
      technologies: 'WordPress | Avada Builder',
      link: 'https://rreach.org/',
      github: '',
    },
    {
      id: 3,
      title: 'Builderssurplus',
      technologies: 'WordPress | ACF',
      link: 'https://builderssurplusyeehaa.com/',
      github: '',
    },
    {
      id: 4,
      title: 'Launch Leadership',
      technologies: 'WordPress | ACF',
      link: 'https://launch-lead.com/',
      github: '',
    },
    {
      id: 5,
      title: 'Enhabit',
      technologies: 'WordPress | Genesis Blocks',
      link: 'https://www.ehab.com/',
      github: '',
    },
    {
      id: 6,
      title: 'Rubico Tech',
      technologies: 'WordPress | ACF',
      link: 'https://rubicotech.in/',
      github: '',
    },
    {
      id: 7,
      title: 'Total Registrations',
      technologies: 'Core PHP',
      link: 'https://www.totalregistration.net/',
      github: '',
    },
    {
      id: 8,
      title: 'Restaurant App',
      technologies: 'React | Fake Json Server',
      link: '',
      github: 'https://github.com/sandeepkumar2882/portfolio-react',
    },
    {
      id: 9,
      title: 'Todo App',
      technologies: 'React ',
      link: '',
      github: 'https://github.com/sandeepkumar2882/todo-react',
    },
    {
      id: 10,
      title: 'Quiz App',
      technologies: 'React ',
      link: '',
      github: 'https://github.com/sandeepkumar2882/react-quiz',
    },
    {
      id: 11,
      title: 'Weather Forcasting',
      technologies: 'React | Weather API',
      link: '',
      github: 'https://github.com/sandeepkumar2882/weather-react',
    },
    {
      id: 12,
      title: 'Chat App With Firebase',
      technologies: 'React | Firebase',
      link: '',
      github: 'https://github.com/sandeepkumar2882/react-chat-app-with-firebase',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Projects.map((pro) => (
          <article className="portfolio__item text-center" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            {pro.github ? (
              <a
              href={pro.github}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
              >
                Github
              </a>
              ) : (
                ""
              )}
              {pro.link ? (
              <a
              href={pro.link}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
              >
                Visit Website
              </a>
              ) : (
                ""
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;