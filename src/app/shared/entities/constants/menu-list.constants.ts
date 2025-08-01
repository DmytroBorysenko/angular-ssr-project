import {IMenuList} from '../interfaces/menu-list.interface';

export const MENU_LIST: IMenuList[] = [
  {
    name: 'Menu.Work',
    path: 'work',
    isOpen: false,
    children: [
      {
        name: 'Menu.Cases',
        path: 'work/cases',
        icon: 'cases',
        desc: 'Improve customer retention with emails that are worth to open and read',
      },
      {
        name: 'Menu.Industries',
        path: 'work/industries',
        icon: 'industries',
        desc: 'Improve customer retention with emails that are worth to open and read',
      },
      {
        name: 'Menu.Clients',
        path: 'work/clients',
        icon: 'clients',
        desc: 'Improve customer retention with emails that are worth to open and read',
      },
      {
        name: 'Menu.Review',
        path: 'work/review',
        icon: 'review',
        desc: 'Improve customer retention with emails that are worth to open and read',
      },
    ],
  },
  {
    name: 'Menu.Services',
    path: 'services',
    children: [
      {
        name: 'Menu.SEO',
        path: 'services/seo',
        icon: 'services/seo',
        desc: 'Our-Services.short-desc.SEO',
      },
      {
        name: 'Menu.PPC',
        path: 'services/ppc',
        icon: 'services/ppc',
        desc: 'Our-Services.short-desc.PPC',
      },
      {
        name: 'Menu.DisplayAds',
        path: 'services/display',
        icon: 'services/display',
        desc: 'Our-Services.short-desc.DisplayAds',
      },
      {
        name: 'Menu.EmailMarketing',
        path: 'services/email',
        icon: 'services/email',
        desc: 'Our-Services.short-desc.EmailMarketing',
      },
      {
        name: 'Menu.WebDev',
        path: 'services/wed-dev',
        icon: 'services/wed',
        desc: 'Our-Services.short-desc.WebDev',
      },
      {
        name: 'Menu.Analytics',
        path: 'services/analytics',
        icon: 'services/analytics',
        desc: 'Our-Services.short-desc.Analytics',
      },
      {
        name: 'Menu.SERM',
        path: 'services/serm',
        icon: 'services/serm',
        desc: 'Our-Services.short-desc.SERM',
      },
      {
        name: 'Menu.Strategy',
        path: 'services/strategy',
        icon: 'services/strategy',
        desc: 'Our-Services.short-desc.Strategy',
      },
      {
        name: 'Menu.SMM',
        path: 'services/smm',
        icon: 'services/smm',
        desc: 'Our-Services.short-desc.SMM',
      },
      {
        name: 'Menu.DesignCreative',
        path: 'services/design-creative',
        icon: 'services/design-creative',
        desc: 'Our-Services.short-desc.DesignCreative',
      },
    ],
  },
  {
    name: 'Menu.Career',
    path: 'career',
  },
  {
    name: 'Menu.Blog',
    path: 'blog',
  },
  {
    name: 'Menu.AboutUs',
    path: 'about',
  },
  {
    name: 'Menu.Contact',
    path: 'contact',
  },
];

export const MENU_ACTIVE_PAGE_MAP = {
  '/': 'Home',
  '/career': 'Career',
  '/vacancy': 'Career',
  '/vacancy-join-team': 'Career',
  '/blog': 'Blog',
  '/post': 'Blog',
  '/work': 'Work',
  '/cases': 'Work',
  '/house-tools': 'Work',
  '/author': 'Blog',
  '/about': 'AboutUs',
  '/contact': 'Contact',
};
