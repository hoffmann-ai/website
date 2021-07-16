import React from 'react';
import styles from './Landing.module.scss';
import Tabs from './Tabs/Tabs';
import WelcomeModule from './WelcomeModule/WelcomeModule';
import Newsletter from '../Newsletter/Newsletter';
import LastPosts from './LastPosts';
import Clients from './Clients';
import Skills from './skills';

const Landing = ({ landingContext }) => {
  const lastPosts = landingContext.allMarkdownRemark.edges;
  const skillsLogos = landingContext.allFile.edges;

  return (
    <div className={styles['landing__page']}>
      <WelcomeModule />
      <h4 className={styles['landing__page__subscribe__message']}>
        Abonnez-vous à notre newseltter pour être à jour sur nos articles !
      </h4>
      <Newsletter style={'landing'} />
      <p className={styles['landing__page__unsubscribe__message']}>
        Vous pouvez vous désabonner à tout moment.
      </p>
      <div className={styles['services']}>
        <h1>Nos services</h1>
        <Tabs>
          <div label='/stack.png' title='Strategy & Architecture'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dapibus, velit ac semper accumsan, sapien sapien tincidunt sem, a
              lobortis orci velit ac lorem. Integer dignissim orci nec sem
              sodales, sit amet varius quam laoreet. Curabitur egestas, mi eu
              ornare congue, odio sem dignissim felis, et feugiat augue diam id
              libero. Maecenas non suscipit lorem, mattis vestibulum purus.
              Suspendisse sed lectus massa. Aliquam accumsan in mauris scelerisque
              sollicitudin. Suspendisse porttitor dui et nisl posuere imperdiet.
              Donec imperdiet lectus quis libero porta laoreet. Nullam sit amet
              tortor posuere, ornare nisl eget, sollicitudin felis. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Sed non nibh nisi. Duis tempus non nisl eget
              interdum. Sed dapibus nulla nulla, sodales molestie magna vestibulum
              at. Nullam vestibulum, metus nec volutpat scelerisque, ligula quam
              faucibus nibh, eget rutrum tellus leo id ipsum. Quisque ornare
              iaculis justo non vestibulum. In hendrerit dolor ut tincidunt
              ullamcorper. Praesent pharetra tristique vehicula. Proin tellus
              ligula, pulvinar eu dui ut, tristique tincidunt diam. Proin
              consectetur ultricies nulla.
            </p>
          </div>
          <div label='/database.png' title='Infrastructure & Optimisation'>
            <p>
              Proin venenatis luctus tincidunt. Sed nec augue rhoncus, dictum
              augue nec, sodales mi. Praesent cursus tincidunt pretium.
              Suspendisse quis porttitor risus, condimentum feugiat ante.
              Curabitur nec justo tellus. Fusce cursus pretium pretium.
              Pellentesque non sem ac augue ornare convallis. Fusce venenatis
              neque nec ipsum eleifend dapibus. Phasellus sit amet sapien non ex
              malesuada vehicula. Quisque rutrum laoreet est, ut pellentesque
              velit porta sit amet. Morbi ut commodo ipsum, quis dignissim dolor.
              Duis ultricies tincidunt finibus. Nunc a commodo neque. Etiam nec
              neque vulputate, efficitur massa sit amet, ullamcorper felis. Duis
              ipsum quam, pretium ut diam id, efficitur eleifend sapien. Phasellus
              libero dolor, finibus a scelerisque vel, pulvinar ut sem. Proin sit
              amet purus euismod dui lobortis lobortis vitae sit amet orci.
              Phasellus iaculis malesuada erat id interdum. Nam non lacinia risus.
              Fusce sed turpis ac quam condimentum pulvinar. Praesent convallis
              aliquet leo, quis vestibulum nunc vestibulum id. Nulla facilisi. In
              id dolor id quam malesuada gravida sed eget nulla. Mauris id tortor
              at mi varius lobortis nec id augue. Curabitur efficitur augue quis
              diam convallis, vel dictum tortor pulvinar. Nam facilisis sit amet
              nisi sit amet consequat. Ut placerat malesuada tristique. Nullam
              pharetra interdum est venenatis varius. Cras ac pellentesque ex.
            </p>
          </div>
          <div label='/it.png' title='Infrastructure as Code'>
            <p>
              Donec condimentum enim at tortor maximus pellentesque. Sed placerat id
              erat nec bibendum. Etiam ac commodo ipsum. Aenean vitae massa semper,
              semper elit sit amet, hendrerit nisi. Etiam justo urna, ultrices vitae
              lobortis sed, semper vel dui. Maecenas sem mauris, viverra vel
              vestibulum nec, mollis a ex. Etiam quis sodales justo. Sed id nulla
              dignissim turpis hendrerit lacinia ut sed orci. Nullam sed urna id
              odio mollis venenatis ut nec odio. Nulla vitae orci lacinia, lobortis
              nisl sit amet, eleifend orci. Quisque in tempor enim, consectetur
              auctor orci. Donec condimentum ligula tincidunt velit ultricies
              pulvinar. Vivamus fringilla, lorem a pellentesque commodo, massa dolor
              congue sem, a interdum lacus lectus eget nibh. Sed ut dui nisl. Fusce
              hendrerit leo a leo iaculis imperdiet. Phasellus libero dolor, finibus
              a scelerisque vel, pulvinar ut sem. Proin sit amet purus euismod dui
              lobortis lobortis vitae sit amet orci. Phasellus iaculis malesuada
              erat id interdum. Nam non lacinia risus. Fusce sed turpis ac quam
              condimentum pulvinar. Praesent convallis aliquet leo, quis vestibulum
              nunc vestibulum id. Nulla facilisi. In id dolor id quam malesuada
              gravida sed eget nulla. Mauris id tortor at mi varius lobortis nec id
              augue. Curabitur efficitur augue quis diam convallis, vel dictum
              tortor pulvinar.
            </p>
          </div>
        </Tabs>
      </div>
      <Clients />
      <Skills logos={skillsLogos} />
      <h1>Nos derniers posts</h1>
      <LastPosts lastPosts={lastPosts} />
    </div>
  );
};

export default Landing;
