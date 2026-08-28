import styles from './Projects.module.scss';

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const featuredProject = {
  label: 'Apple Catalog',
  title: 'Nice Gadgets',
  description:
    'A fully functional Apple product catalog, built using React and TypeScript with React Router and React Context to manage the state of the shopping cart and selected items. The project includes product filtering, sorting, and search functionality, pagination, and cross-session state persistence. The responsive design ensures proper display on screens ranging from 330 to 1440 pixels. The project demonstrates skills in building complex component-based architecture and attention to UX details',
  tags: ['React', 'TypeScript', ' SCSS module'],
  liveUrl: 'https://oksigenka.github.io/apple-catalog/#/',
  githubUrl: 'https://github.com/Oksigenka/apple-catalog',
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Apple Catalog',
    description:
      'A fully functional Apple product catalog, built using React and TypeScript with React Router and React Context to manage the state of the shopping cart and selected items. The project includes product filtering, sorting, and search functionality, pagination, and cross-session state persistence. The responsive design ensures proper display on screens ranging from 330 to 1440 pixels. The project demonstrates skills in building complex component-based architecture and attention to UX details',
    tags: ['React', 'TypeScript', ' SCSS module'],
    liveUrl: 'https://oksigenka.github.io/apple-catalog/#/',
    githubUrl: 'https://github.com/Oksigenka/apple-catalog',
  },
  {
    number: '02',
    title: 'Sweeties',
    description:
      'A modern web application for a pastry shop, built using Angular 17+ with TypeScript and SCSS. It includes a dessert catalog with detailed product pages, an interactive dessert builder with step-by-step ingredient selection, and a fully functional shopping cart with checkout functionality. The application demonstrates the use of Angular Router, Reactive Forms, and a modular component architecture.',
    tags: ['Angular', 'SCSS', 'TypeScript'],
    liveUrl: 'https://oksigenka.github.io/angular-sweeties/home',
    githubUrl: 'https://github.com/Oksigenka/angular-sweeties',
  },
  {
    number: '03',
    title: '2048 Game',
    description:
      'A browser-based implementation of the classic 2048 game using pure JavaScript, HTML, and SCSS without any frameworks. The full game logic is implemented: moving and merging tiles on a 4×4 grid, calculating scores, determining wins and losses, and generating new tiles after each move. The project demonstrates skills in working with the DOM, handling keyboard events, and managing state without external dependencies.',
    tags: ['JavaScript', 'HTML', 'SCSS'],
    liveUrl: 'https://oksigenka.github.io/2048-puzzle-game/',
    githubUrl: 'https://github.com/Oksigenka/2048-puzzle-game',
  },
  {
    number: '04',
    title: 'CrazyBaby',
    description:
      'A responsive product landing page, built exclusively with HTML and CSS without JavaScript or external frameworks. The layout was created based on a Figma mockup using Flexbox and CSS Grid, featuring a clear visual hierarchy and minimalist design. The page displays correctly on all screen sizes—from mobile to desktop. The project highlights a solid foundation in semantic HTML markup and modern CSS techniques.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://oksigenka.github.io/landing_kickstarter/',
    githubUrl: 'https://github.com/Oksigenka/landing_kickstarter?tab=readme-ov-file',
  },
  {
    number: '05',
    title: 'B&O',
    description:
      'A modern and responsive landing page designed to showcase a product line. The layout follows best practices for layout structuring and responsive design, making it suitable for different screen sizes. This project demonstrates core front-end skills without using JavaScript or external frameworks',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://oksigenka.github.io/bang-olufsen/',
    githubUrl: 'https://github.com/Oksigenka/bang-olufsen',
  },
];

const codeExample = [
  <>
    <span className={styles.code__keyword}>import</span>{' '}
    {'{ Button, Card, Badge } '}
    <span className={styles.code__keyword}>from</span>{' '}
    <span className={styles.code__string}>'@lumen/ui'</span>
  </>,
  '',
  <>
    <span className={styles.code__keyword}>export const</span>{' '}
    <span className={styles.code__function}>Dashboard</span> = () =&gt; (
  </>,
  <>
    {'  <'}<span className={styles.code__tag}>Card</span>{' '}
    <span className={styles.code__prop}>variant</span>=
    <span className={styles.code__string}>"elevated"</span>{'>'}
  </>,
  <>
    {'    <'}<span className={styles.code__tag}>Badge</span>{' '}
    <span className={styles.code__prop}>status</span>=
    <span className={styles.code__string}>"success"</span>{'>'}
    Live{'</'}<span className={styles.code__tag}>Badge</span>{'>'}
  </>,
  <>
    {'    <'}<span className={styles.code__tag}>Button</span>{' '}
    <span className={styles.code__prop}>size</span>=
    <span className={styles.code__string}>"lg"</span>{'>'}
    Get started{'</'}<span className={styles.code__tag}>Button</span>{'>'}
  </>,
  <>
    {'  </'}<span className={styles.code__tag}>Card</span>{'>'}
  </>,
  ')',
  '',
  <>
    <span className={styles.code__comment}>
      // 120+ components · Full a11y · Dark mode
    </span>
  </>,
];

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects__container}>

        <div className={styles.sectionLabel}>
          <span>02</span>
          <span className={styles.sectionLabel__dash} />
          <span>WHAT I'VE BUILT</span>
          <span className={styles.sectionLabel__line} />
        </div>

        <h2 className={styles.projects__heading}>
          Selected <em className={styles.projects__heading__em}>projects</em>.
        </h2>

        <article className={styles.featured}>
          <div className={styles.featured__content}>
            <span className={styles.featured__label}>
              {featuredProject.label}
            </span>

            <h3 className={styles.featured__title}>
              {featuredProject.title}
            </h3>

            <p className={styles.featured__description}>
              {featuredProject.description}
            </p>

            <div className={styles.tags}>
              {featuredProject.tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.featured__actions}>
              <a
                href={featuredProject.liveUrl}
                className={styles.featured__actions__button}
              >
                Live Demo →
              </a>

              <a
                href={featuredProject.githubUrl}
                className={styles.featured__actions__button}
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Code preview */}
          <div className={styles.code}>
            <div className={styles.code__content}>
              {codeExample.map((line, index) => (
                <div className={styles.code__line} key={index}>
                  <span className={styles.code__number}>
                    {index + 1}
                  </span>

                  <code>{line}</code>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className={styles.projects__grid}>
          {projects.map((project) => (
            <article
              className={styles.projects__card}
              key={project.number}
            >
              <span className={styles.projects__card__number}>
                {project.number}
              </span>

              <h3 className={styles.projects__card__title}>
                {project.title}
              </h3>

              <p className={styles.projects__card__description}>
                {project.description}
              </p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.projects__card__actions}>
                {project.liveUrl && (
                  <a href={project.liveUrl} className={styles.projects__card__actions__button}>Live Demo →</a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} className={styles.projects__card__actions__button}>
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};