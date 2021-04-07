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
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile_pic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/charlie-galb/CV/blob/master/README.md', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Tape-It-UI.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/voice-notes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'le-chicken-crop.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/emilyalice2708/le-chicken', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chitter-homescreen.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/charlie-galb/chitter-frontend-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
