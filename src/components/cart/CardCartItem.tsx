import { productQtySelector } from '@store/features/cartSlice';
import { useAppSelector } from '@store/store';
import { IProduct } from 'utils/types';

import AddCartBtn from '../ui/AddCartBtn/AddCartBtn';
import styles from './CardCartItem.module.scss';

const CardCartItem = (props: { item: IProduct }) => {
  const { name, technology, price, imagePath } = props.item;
  const qty = useAppSelector(state => productQtySelector(state, props.item.id));

  return (
    <li className={styles.item}>
      <img className={styles.image} src={imagePath} alt={`cart item ${name}`} />
      <div>
        <p>
          <strong>
            {name.toUpperCase()} {technology?.toUpperCase()}
          </strong>
        </p>
        <p className={styles.price}>
          <span>${price}</span>
          <div className={styles.price__total}>
            <AddCartBtn product={props.item} />
            <span>${price * qty!}</span>
          </div>
        </p>
      </div>
    </li>
  );
};

export default CardCartItem;
