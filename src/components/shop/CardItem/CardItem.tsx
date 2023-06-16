import { IProduct } from 'utils/types';

import AddCartBtn from '@/components/ui/AddCartBtn/AddCartBtn';

import styles from './CardItem.module.scss';

type Props = {
  item: IProduct;
};

const CardItem = (props: Props) => {
  const { category, name, price, technology, stock, imagePath } = props.item;

  return (
    <li className={styles.card}>
      <div className={styles.card__image}>
        <img src={imagePath} />
        {stock <= 5 && stock > 0 ? (
          <p className={styles.card__leftover}>Only {stock} left!</p>
        ) : (
          ''
        )}
        {stock === 0 ? <p className={styles.card__soldout}>SOLD OUT</p> : ''}
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
            <strong>{category}</strong>
          </span>
        </div>
      </div>
      <AddCartBtn product={props.item} />
    </li>
  );
};

export default CardItem;
