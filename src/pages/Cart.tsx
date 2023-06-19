import { totalPriceSelector } from '@store/features/cartSlice';
import { useAppSelector } from '@store/store';

import CardCartItem from '@/components/cart/CardCartItem';
import Layout from '@/components/layout/Layout';

import styles from './Cart.module.scss';

const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems);

  const totalPrice = useAppSelector(totalPriceSelector);
  return (
    <Layout>
      <div className={styles.cart}>
        <ul className={styles.items}>
          {cartItems.map(item => (
            <CardCartItem key={item.product.id} item={item.product} />
          ))}
        </ul>
        <p className={styles.total}>
          Total Price: <span>{totalPrice} $</span>
        </p>
      </div>
    </Layout>
  );
};

export default CartPage;
