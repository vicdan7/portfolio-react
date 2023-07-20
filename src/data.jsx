import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/pokedex.png';
  import Work2 from './assets/r&m.png';
  import Work3 from './assets/ecommerce.png';
  import Work4 from './assets/weather.png';
  import Work5 from './assets/users.png';
  import Work6 from './assets/portfolio.png';

  
  import Theme1 from './assets/blue.png';
  import Theme2 from './assets/blueviolet.png';
  import Theme3 from './assets/green.png';
  import Theme4 from './assets/magenta.png';
  import Theme5 from './assets/orange.png';
  import Theme6 from './assets/purple.png';
  import Theme7 from './assets/red.png';
  import Theme8 from './assets/yellow.png';
  import Theme9 from './assets/goldenrod.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Victor Daniel',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Ibarra Bolaños',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '36 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Colombian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'City : ',
      description: 'Pasto',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+573013532321',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'ibarravictor334@gmail.com',
    },
  
   {
      id: 10,
      title: 'Languages : ',
      description: 'Spanish, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '97+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '81+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '90+',
      title: ' Learning <br /> Ability',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2018 - 2023',
      title: 'Owner and administrator of a sport complex for indoor soccer <span> Balon d Oro </span>',
      desc: 'Attend and direct, general maintenance, and supplier management. Manage accounting records, income, expenses and operational cost. Assets and liabilities.  Monthly report delivery to partners, total expenses and total earnings.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2013 - 2014',
      title: 'Chief culinary creation <span> Camp Waldemar, USA </span>',
      desc: 'I was in charge of creating culinary creations for various events and celebrations',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2012 - 2013',
      title: 'Head Waiter <span> Camp Wildwood, USA </span>',
      desc: 'I was in charge of organizing the dining areas and social lounges.',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2014',
      title: 'Finance and International Relations. <span> San Martin University </span>',
      desc: 'Proficient professional in understanding current global financial and diplomatic dynamics.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Full Stack Web Development and Computer Science <span> Academlo </span>',
      desc: 'Efficient programmer proficient in understanding current and in-demand technologies to be an effective and committed full-stack developer.',
    },
  

  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '90',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '80',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'React js',
      percentage: '66',
    },
  
    {
      id: 5,
      title: 'Node js',
      percentage: '75',
    },
  
    {
      id: 6,
      title: 'Git',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Git Hub',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'Boostrap',
      percentage: '45',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Pokedex',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'API',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://pokedex-66a770.netlify.app/',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Rick & Morty',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'API',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://rickandmorty-7b6282.netlify.app/',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Ecommerce',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Ecommerce Academlo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Javascript vanilla',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://ecommercebb713.netlify.app/',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Weather App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'API',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://weatherapp-821a27.netlify.app/',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Users',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'CRUD',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://crud-d6c473.netlify.app/',
        },
      ],
    },

    {
      id: 6,
      img: Work6,
      title: 'Portfolio',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Portfolio Vanilla',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Myself',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://portfolio-b7c1e1.netlify.app/',
        },
      ],
    },
  
  
   
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(80, 61%, 50%)',
      
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(339, 81%, 66%)',
      
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(19, 96%, 52%)',
      
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(252, 35%, 51%)',
      
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(4, 93%, 54%)',
      
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(43, 74%, 49%)',
     
     
    },

    {
      id: 9,
      img: Theme9,
      color: 'hsl(19, 96%, 52%)',
      
    },
  
  
  ];