import { IProduct } from 'utils/types';

import styles from './CardItem.module.scss';

type Props = {
  item: IProduct;
};

const CardItem = (props: Props) => {
  const { category, name, price, technology, imagePath } = props.item;

  return (
    <li className={styles.card}>
      <div className={styles.card__image}>
        <img src={imagePath} />
      </div>
      <div className={styles.card__text}>
        <h2 className={styles.card__text_title}>
          {name.toUpperCase()}
          {technology ? (
            <span>
              <strong> {technology.toUpperCase()}</strong>
            </span>
          ) : (
            ''
          )}
        </h2>
        <div className={styles.card__text_bottom}>
          <p>${price} </p>
          <span className={[styles['card__tag'], styles[`${category}`]].join(' ')}>
            {category}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
