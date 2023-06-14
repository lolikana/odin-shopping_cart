import { Presentation } from '@/components/homepage';

import styles from './Homepage.module.scss';

const Homepage = () => {
  return (
    <section className={styles.section}>
      <Presentation />
    </section>
  );
};

export default Homepage;
