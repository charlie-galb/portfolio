import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Charlie',
  subtitle: 'Charlie who?',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile_pic.jpg',
  paragraphOne: 'I\'m a full-stack developer and Makers graduate with a background in publishing and English-language teaching.',
  paragraphTwo: 'I was drawn to programming by curiosity. I was tired of staring at screens and wondering about the magic that made the pictures move around, so I decided to find out. As soon as I started, I was hooked. The cycle of frustration and triumph in programming is more addictive than any puzzle game, and the sense of satisfaction that comes from carrying through a project from conception to deployment is unparalleled.',
  paragraphThree: 'Have a look at my projects and get in touch if you\'re interested in collaborating, or if you just want to hurl some abuse my way (I\'ve been online before, you know).',
  resume: 'https://github.com/charlie-galb/CV/blob/master/README.md', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Tape-It-UI.png',
    title: 'Taped It',
    info: 'A voice-notes plug-in for slack.',
    info2: '',
    url: 'https://tapedit.netlify.app/',
    repo: 'https://github.com/voice-notes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'le-chicken-crop.png',
    title: 'Le Chicken: The Poulet',
    info: 'A language-learning RPG built in React Native.',
    info2: 'This was a group project completed over the course of two weeks while at Makers Academy.',
    url: '',
    repo: 'https://github.com/emilyalice2708/le-chicken', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chitter-homescreen.png',
    title: 'Chitter',
    info: 'A social media platform.',
    info2: '',
    url: 'https://chitter-deployed.netlify.app/',
    repo: 'https://github.com/charlie-galb/chitter-frontend-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'galbraith.charlie@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charliegalbraith/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/charlie-galb',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
