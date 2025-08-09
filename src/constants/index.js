export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    position: 'Project Manager at Code UpScale',
    img: 'assets/review1.png',
    review:
      'Working with Usman has been exceptional. His expertise in MERN and MEAN stacks helped us deliver scalable solutions for our eCommerce platform. His attention to clean architecture and performance optimization is remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Tech Lead at Focusteck',
    img: 'assets/review2.png',
    review:
      'Usman\'s skills in microservices architecture and real-time applications are outstanding. He successfully implemented complex features using Angular, NestJS, and Socket.IO. His problem-solving approach is truly impressive.',
  },
  {
    id: 3,
    name: 'David Wilson',
    position: 'CTO at EMI Fusion',
    img: 'assets/review3.png',
    review:
      'Usman delivered excellent IoT solutions and admin panels for our devices. His expertise in MQTT protocols and real-time data handling helped us build robust systems. Highly recommend his development skills.',
  },
  {
    id: 4,
    name: 'Lisa Rodriguez',
    position: 'Product Manager at Ideawake',
    img: 'assets/review4.png',
    review:
      'Usman\'s work on our idea management platform was phenomenal. His implementation of Elasticsearch and microservices architecture significantly improved our platform performance and scalability.',
  },
];

export const myProjects = [
  {
    title: 'Ideawake - Idea Management Platform',
    desc: 'Ideawake is a shockingly simple idea management platform proven to transform ideas into impact. We help companies double the ROI they\'re achieving from crowdsourcing ideas while cutting management time in half.',
    subdesc:
      'An easy-to-use, highly configurable platform that captures, evaluates, and implements ideas from employees, customers, and partners. Features include AI-powered insights, collaborative workflows, real-time analytics, and gamification to achieve 50-80% participation rates.',
    href: 'https://ideawake.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: '/assets/angular-svgrepo-com.svg',
      },
      {
        id: 2,
        name: 'NestJS',
        path: '/assets/nestjs-svgrepo-com.svg',
      },
      {
        id: 3,
        name: 'Redis',
        path: '/assets/redis-logo-svgrepo-com.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb-svgrepo-com.svg',
      },
    ],
  },
  {
    title: 'Ilgos - eCommerce Platform',
    desc: 'Ilgos is a scalable eCommerce platform built with modern technologies. I led the development and optimization of this platform, implementing complex features like Unit of Measurement management and handling migration of hundreds of thousands of records from legacy systems.',
    subdesc:
      'Built with Next.js, NestJS, Redux, Material-UI, MySQL, and TypeORM in a monorepo architecture. Integrated Bull Queue, Redis, and Socket.IO for real-time batch processing and migration progress tracking.',
    href: 'https://ilgos-marketplace.cloudupscale.com/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs-svgrepo-com (1).svg',
      },
      {
        id: 2,
        name: 'NestJS',
        path: '/assets/nestjs-svgrepo-com.svg',
      },
      {
        id: 3,
        name: 'Redis',
        path: '/assets/redis-logo-svgrepo-com.svg',
      },
      {
        id: 4,
        name: 'Stripe',
        path: '/assets/stripe-svgrepo-com.svg',
      },
    ],
  },
  {
    title: 'Brilliant Move - Logistics Platform',
    desc: 'Brilliant Move is a comprehensive logistics platform based in the United States that enables consumers and businesses to easily transport logistics throughout the country. Features include real-time tracking and integrated payment systems.',
    subdesc:
      'Built with React.js and integrated with Google Maps API for navigation and tracking. Implemented Stripe payment gateway for secure transactions and real-time logistics management.',
    href: 'https://mybrilliantmove.com/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/brillent-move.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Stripe',
        path: '/assets/stripe-svgrepo-com.svg',
      },
      {
        id: 3,
        name: 'Google Maps',
        path: '/assets/map-pin-alt-svgrepo-com.svg',
      },
      {
        id: 4,
        name: 'Bootstrap',
        path: '/assets/bootstrap-svgrepo-com.svg',
      },
    ],
  },
  {
    title: 'Taxeezy - Tax Management System',
    desc: 'Taxeezy is a comprehensive tax management application that I led from end-to-end design to development. The platform features real-time chat systems, scalable APIs, and secure authentication for streamlined tax management processes.',
    subdesc:
      'Built with Next.js and Node.js backend, MongoDB for data storage. Implemented real-time chat using Socket.IO, created reliable RESTful APIs, and integrated JWT authentication for secure user management.',
    href: 'https://taxeezy.co.uk/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs-svgrepo-com (1).svg',
      },
      {
        id: 2,
        name: 'Stripe',
        path: '/assets/stripe-svgrepo-com.svg',
      },
      {
        id: 3,
        name: 'Material-UI',
        path: '/assets/material-ui-svgrepo-com.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb-svgrepo-com.svg',
      },
    ],
  },
  {
    title: 'EMI Portal - Project Management System',
    desc: 'EMI Portal is an all-in-one administration system for EMI Fusion featuring sprint-based project and task management. The system includes comprehensive employee management with role-based access control and efficient workflow management.',
    subdesc:
      'Developed using React.js frontend with Node.js backend and PostgreSQL database. Implemented sprint-based project management, role-based access control (RBAC), and comprehensive task tracking systems.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'RBAC',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Code UpScale',
    pos: 'Senior MERN Stack Developer',
    duration: 'Sep 2024 - Present',
    title: "Leading development of Ilgos eCommerce platform using Next.js, NestJS, and microservices. Specializing in performance optimization, data migration, and implementing complex features like UOM management.",
    icon: '/assets/codeupscale.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Focusteck',
    pos: 'MEAN Stack Engineer',
    duration: 'Mar 2023 - Sep 2024',
    title: "Developed large-scale data-driven platforms using Angular, NestJS, and microservices. Implemented real-time features with Socket.IO and optimized performance using Elasticsearch and Redis.",
    icon: '/assets/focusteck.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'EMI Fusion',
    pos: 'MERN Stack Engineer',
    duration: 'Sep 2020 - Jan 2023',
    title: "Built IoT device admin panels using MQTT protocol, developed RESTful APIs with MongoDB and PostgreSQL, and implemented role-based access control systems for project management.",
    icon: '/assets/emi_fusion_logo.jpeg',
    animation: 'salute',
  },
];
