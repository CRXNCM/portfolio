import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#projects',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://bsky.app/profile/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Tiktok',
    url: `https://www.figma.com/${config.tiktok}`,
    icon: 'tiktok',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
