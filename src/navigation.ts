import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
	  href: '/',
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Case Studies',
          href: getPermalink('/case-studies'),
        },
        {
          text: 'Videos',
          href: getPermalink('/t/videos'),
        },
        {
          text: 'Materials',
          href: getPermalink('/materials'),
        },
	  ]
    },
    {
      text: 'Contact',
      links: [
        {
          text: 'Reach out',
          href: getPermalink('/contact'),
        },
        {
          text: 'Newsletter',
          href: getPermalink('/newsletter'),
        },
      ],
    },
  ],
  actions: [
	  { text: 'Community', href: 'https://community.convergentfacilitation.org', target: '_blank' },
	  ],
};

export const footerData = {
  links: [
    {
      title: 'Content',
      links: [
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Videos', href: '/t/videos' },
        { text: 'Materials', href: '/t/materials' },
        { text: 'Book', href: '/book-highest-common-denominator' },
        { text: 'All our content', href: '/all' },
      ],
    },
    {
      title: 'Engage',
      links: [
        { text: 'Events', href: '/events' },
        { text: 'Community of Practice', href: 'https://community.convergentfacilitation.org' },
        { text: 'Work with us', href: '/contact' },
      ],
    },
    {
      title: 'More',
      links: [
        { text: 'Contact', href: '/contact' },
        { text: 'Newsletter', href: '/newsletter' },
        { text: 'Github', href: 'https://github.com/orgs/Convergent-Facilitation/repositories' },
        { text: 'NGL Community', href: 'https://github.com/orgs/Convergent-Facilitation/repositories' },

        

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/ConvergFacilit',  target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/convergentfacilitation/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/convergentfacilitation' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/orgs/Convergent-Facilitation/repositories', target: '_blank' },
  ],
  footNote: `
    Convergent Facilitation — 2020 to present. Built with AstroWind. 
  `,
};
