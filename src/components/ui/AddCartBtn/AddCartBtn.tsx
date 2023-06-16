import { decrement, increment, productQtySelector } from '@store/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { IProduct } from 'utils/types';

import QtyBtn from '../QtyBtn/QtyBtn';
import styles from './AddCartBtn.module.scss';

const AddCartBtn = (props: { product: IProduct }) => {
  const { product } = props;

  const qty = useAppSelector(state => productQtySelector(state, product.id));
  const dispatch = useAppDispatch();

  let content: JSX.Element = <p>SoldOut</p>;
  if (!qty) {
    content = (
      <button className={styles.btn} onClick={() => dispatch(increment(product))}>
        Add To Cart
      </button>
    );
  }
  if (qty) {
    content = (
      <QtyBtn
        onIncrease={() => dispatch(increment(product))}
        onDecrease={() => dispatch(decrement(product))}
        qty={qty}
      />
    );
  }

  return <div className={styles.container}>{content}</div>;
};

export default AddCartBtn;
