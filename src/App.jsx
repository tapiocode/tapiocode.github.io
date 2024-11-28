import { Mail } from 'lucide-react';
import logo from './assets/Tapiocode-logo.png';
import github from './assets/github.svg';
import bluesky from './assets/bluesky.svg';
import koFi from './assets/ko-fi.png';
import './App.css'
import categories from './github_projects';
import experiences from './web_experiences';

function Github({ width = 18 }) {
  return <img src={github} className="inline align-text-top" width={width} />;
}

function Category(props) {
  return (
    <section className="grid grid-cols-subgrid col-span-3 gap-3 border-t border-t-stone-400 pt-2">
      <div
        className="min-w-40 max-h-40 bg-no-repeat rounded-md col-span-2 sm:col-span-1"
        style={{
          backgroundImage: `url(${props.image.image})`,
          backgroundPosition: props.image.position,
          backgroundSize: props.image.size,
        }}
      ></div>
      <div>
        <div className="flex flex-col gap-3">
          <h4 className="leading-none">{ props.title }</h4>
          <p className="text-sm line-clamp-2">{ props.description }</p>
          <div className="flex gap-8 gap-y-2 flex-col sm:flex-row">
            <a href={props.url} target="_blank"><Github /> GitHub</a>
            {props.demo && <a href={props.demo} target="_blank">Online Demo &raquo;</a>}
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end col-span-3 sm:col-span-1">
        <ul className="tech-list">
          {props.tech.map((tech, i) => (
            <li key={i} data-tech={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionTop(props) {
  return (
    <>
    <h2 className="md:col-start-2 col-span-3">{props.title}</h2>
    <p className="md:col-start-2 col-span-3">{props.desc}</p>
    </>
  );
}

function Divider() {
  return <hr className="border-stone-500 my-2" />;
}

function App() {

  const getTechnologiesLink = (title, i) => {
    return (
      <a key={i} href={title.url} className="mr-4 my-2 inline-flex md:flex gap-1 justify-left" target="_blank">
        {title.image && <span className="w-5"><img src={title.image} alt="" className="w-6" /></span>}
        <span>{title.name}</span>
      </a>
    );
  }

  return (
    <>
      <header>
        <div className="content-wrapper">
          <div className="logo">
            <img src={logo} width="100%"/>
          </div>
        </div>
      </header>
      <main>
        <div className="content-wrapper flex flex-col gap-6">
          <div className="flex justify-center">
            <p>A collection of personal projects and works I've published online that I consider worthwhile showcasing.
              Everything is designed and built by me unless otherwise noted.</p>
          </div>

          <Divider />

          <div className="grid grid-cols-4 gap-4">
            <SectionTop
              title="Web Experiences"
              desc="Exploring concepts, new technologies, and ideas."
            />
            {experiences.map(({ title, description, url, urlShown, images }, i) => (
            <div key={i} className="grid grid-cols-subgrid col-span-4 my-6">
              <div className="col-span-4 md:col-span-1">
                <div className="flex flex-col items-end text-right gap-2">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={url} target="_blank">{urlShown}</a>
                </div>
              </div>
              <div className="col-span-3 px-5 staggered-elems">
                {images.map((image, i) =>
                <a key={i} href={image.url} target="_blank"><img src={image.image} /></a>
                )}
              </div>
            </div>
            ))}
          </div>

          <Divider />

          <div className="max-w-screen-md mb-8">
            <div className="grid grid-cols-projects gap-4">
              <SectionTop
                title={<><Github width={32} /> GitHub Projects</>}
                desc="A collection of various types of projects published over the years. Mostly MIT licensed."
              />
              {categories.map((category, i) => (
              <div key={i} className="grid grid-cols-subgrid col-span-4 mb-12">
                <div className="col-span-4 md:col-span-1">
                  <h3 className="font-bold mb-1">Technologies</h3>
                  {category.titles.map((title, i) => (
                    title.url
                      ? getTechnologiesLink(title, i)
                      : <span key={i} className="text-stone-700">{title.name}</span>
                  ))}
                </div>
                <div className="grid grid-cols-subgrid gap-8 col-span-3">
                {category.projects.map((project, i) => (
                  <Category key={i} {...project} />
                ))}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-10 pb-20">
        <div className="content-wrapper flex flex-col gap-4 items-center justify-center">
          <p>A showcase of personal projects.</p>
          <p>Site published on Github Pages. <a href="https://github.com/tapiocode/tapiocode.github.io">View source code</a>.</p>
          <div className="w-fit my-8 grid grid-cols-footer gap-4 gap-x-2 text-sm">
            <Github width={20} />
            <span>Github</span>
            <a href="https://github.com/tapiocode">My GitHub home</a>
            <Mail style={{ width: '20px'}} />
            <span>Email</span>
            <a href="mailto:me@tapiocode.com">me@tapiocode.com</a>
            <img src={bluesky} width="20" />
            <span>Bluesky</span>
            <a href="https://bsky.app/profile/tapiocode.com" target="_blank">@tapiocode.com</a>
            <img src={koFi} width="20" />
            <span>Ko-fi</span>
            <a href="https://ko-fi.com/tapiocode" target="_blank">Tapiocode</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
