import cd from './assets/demo/cd.jpg';
import coderain from './assets/demo/coderain.jpg';
import murica from './assets/demo/murica.jpg';
import estickerIcon from './assets/esticker/sticker.png';
import estickerLogo from './assets/esticker/esticker-favicon.jpg';

const getDemoUrl = (page = '') => `https://demo.tapiocode.com/${page}?nav`;

const experiences = [
  {
    title: 'eSticker!',
    description: 'Webapp for creating shiny objects to decorate personal places for free.',
    url: 'https://esticker.tapiocode.com',
    urlShown: 'esticker.tapiocode.com',
    images: [
      {
        image: estickerIcon,
        url: 'https://esticker.tapiocode.com',
      },
      {
        image: estickerLogo,
        url: 'https://esticker.tapiocode.com',
        shadow: true,
      },
    ]
  },
  {
    title: 'Frontend Demo Gallery',
    description: 'Collection of visualizations written in JS/CSS for testing out ideas, and feasibility of technical approaches.',
    url: getDemoUrl(),
    urlShown: 'demo.tapiocode.com',
    images: [
      {
        image: murica,
        url: getDemoUrl('murica'),
        shadow: true,
      },
      {
        image: cd,
        url: getDemoUrl('cd'),
        shadow: true,
      },
      {
        image: coderain,
        url: getDemoUrl('coderain'),
        shadow: true,
      },
    ]
  }
];

export default experiences;
