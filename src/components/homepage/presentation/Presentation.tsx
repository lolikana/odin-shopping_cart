import Mountains from '@/assets/homepage/Mountain.webp';
import SalomonShoes from '@/assets/homepage/salomon-shoes.png';
import LinkBtn from '@/components/ui/LinkBtn/LinkBtn';

import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          className={styles.images__mountains}
          src={Mountains}
          alt="Mountains images"
        />
        <img className={styles.images__shoes} src={SalomonShoes} alt="Salomon shoes" />
      </div>
      <div className={styles.text}>
        <h2 className={styles.text__title}>Salomon & GORE-TEX</h2>
        <p className={styles.text__presentation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate harum
          obcaecati! A cumque eaque sequi veritatis nostrum voluptatum illo animi porro
          autem aperiam, exercitationem in voluptas suscipit architecto praesentium.
        </p>
      </div>
      <div className={styles.btn}>
        <LinkBtn path="/shop" text="SHOP NOW" />
      </div>
    </div>
  );
};

export default Presentation;
