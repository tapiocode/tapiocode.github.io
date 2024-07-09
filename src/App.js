import './App.css';
import logo from './images/githubtapiocode.png';
import raspberrypi from './images/raspberrypi.png';
import bleepImage from './images/bleep.png';
import twentyfortyeight from './images/2048.png';
import ruuvi from './images/ruuvi-logo-white.png';

const categories = [
  {
    titles: [
      {
        name: 'Raspberry Pi',
        image: raspberrypi,
      },
      {
        name: 'RuuviTag',
        image: ruuvi,
      },
    ],
    projects: [

      {
        url: 'https://github.com/tapiocode/simple-sensor-station',
        image: {
          image: 'https://raw.githubusercontent.com/tapiocode/simple-sensor-station/main/sensors.jpg',
          position: '-15px -57px',
          size: '850px',
        },
        tech: [
          'Python',
          'HTML',
        ],
        title: 'Simple sensor data station',
        description: 'A local Python server that collects BLE broadcast data from nearby RuuviTags, and provides a simple web interface'
      },
      {
        url: 'https://github.com/tapiocode/sparkline',
        image: {
          image: 'https://raw.githubusercontent.com/tapiocode/sparkline/main/demo1.jpg',
          position: '0px -10px',
          size: '165px'
        },
        tech: [
          'C'
        ],
        title: 'Sparkline',
        description: 'Raspberry Pi Pico C/C++ SDK library to draw simple chart data on an OLED display'
      },
      {
        url: 'https://github.com/tapiocode/rpi-pico-ruuvi-station',
        image: {
          image: 'https://github.com/tapiocode/rpi-pico-ruuvi-station/raw/main/photo.jpg',
          position: '-30px -40px',
          size: '200px'
        },
        tech: [
          'C'
        ],
        title: 'Raspberry Pi Pico W based RuuviTag station',
        description: 'Displays the sensor data of nearby RuuviTags'
      },
      {
        url: 'https://github.com/tapiocode/raspberry-pi-pico-demos',
        image: {
          image: 'https://github.com/tapiocode/raspberry-pi-pico-demos/raw/main/led-array-sweeper.gif',
          position: '0px -10px',
          size: 'auto'
        },
        tech: [
          'Python',
        ],
        title: 'Raspberry Pi Pico demos',
        description: 'A collection of Pico demos written in MicroPython'
      },
    ]
  },
  {
    titles: [
      {
        name: 'Web Development',
      },
    ],
    projects: [
      {
        url: 'https://github.com/tapiocode/overflow-shadow',
        demo: 'https://tapiocode.github.io/overflow-shadow/',
        image: {
          image: 'https://github.com/tapiocode/overflow-shadow/raw/main/example.png',
          position: '0px -30px',
          size: '300px'
        },
        tech: [
          'JavaScript',
        ],
        title: 'Overflow shadow',
        description: 'Simple library that adds shadows on the container edges to indicate overflowing content'
      },
      {
        url: 'https://github.com/tapiocode/bleep',
        demo: 'https://tapiocode.github.io/bleep/',
        image: {
          image: bleepImage,
          position: '0px -10px',
          size: '165px'
        },
        tech: [
          'JavaScript',
          'CSS'
        ],
        title: 'Morse Code App',
        description: 'An app written in plain JS/CSS'
      },
      {
        url: 'https://github.com/tapiocode/2048',
        demo: 'http://tapiocode.github.io/2048/',
        image: {
          image: twentyfortyeight,
          position: '0px 0px',
          size: '165px'
        },
        tech: [
          'JavaScript',
          'CSS'
        ],
        title: '2048 with timers',
        description: 'Written in 2014. Timers added to the popular 2048 game.'
      },
    ]
  },
]

function Card(props) {
  const imageStyle = {
    minWidth: '10rem',
    maxHeight: '10rem',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props.image.image})`,
    backgroundPosition: props.image.position,
    backgroundSize: props.image.size,
  };
  return (
    <section>
      <div style={imageStyle}></div>
      <div className="container">
        <div className="top-row">
          <h3>{ props.title }</h3>
          <ul>
            {props.tech.map((tech, i) => (
              <li key={i} data-tech={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="content">
          <p>{ props.description }</p>
          <a href={props.url} target="_blank">GitHub repository &raquo;</a>
          {props.demo && <a href={props.demo} target="_blank" style={{marginLeft: 20}}>Demo &raquo;</a>}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <header>
        <div className="content-col">
          <a href="https://github.com/tapiocode"><img className="logo" src={logo} alt="github.com/tapiocode" /></a>
        </div>
      </header>
      <main>
        <div className="content-col cards-container">
          <p className="ingress">
            <div>
              <strong>Personal GitHub projects showcase</strong>
              <a href="https://github.com/tapiocode?tab=repositories">All GitHub repositories &raquo;</a>
            </div>
            <span>Last update: July 2024</span>
          </p>
          {categories.map((category, i) => (
            <div key={i} className="category">
              <h2>
                {category.titles.map((title, i) => (
                  <div key={i} className="title">
                    {title.image && <img src={title.image} alt="" />}
                    <span>{title.name}</span>
                  </div>
                ))}
              </h2>
              {category.projects.map((project, i) => (
                <Card key={i} {...project} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
