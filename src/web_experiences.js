import cd from './assets/cd.jpg';
import coderain from './assets/coderain.jpg';
import murica from './assets/murica.jpg';

const getUrl = (page = '') => `https://demo.tapiocode.com/${page}?nav`;
const experiences = [
  {
    title: 'Frontend Demo Gallery',
    description: 'Collection of visualizations written in JS/CSS for testing out ideas, and feasibility of technical approaches.',
    url: getUrl(),
    urlShown: 'demo.tapiocode.com',
    images: [
      {
        image: murica,
        url: getUrl('murica'),
      },
      {
        image: cd,
        url: getUrl('cd'),
      },
      {
        image: coderain,
        url: getUrl('coderain'),
      },
    ]
  }
];

export default experiences;
