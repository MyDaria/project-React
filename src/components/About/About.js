import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default About;