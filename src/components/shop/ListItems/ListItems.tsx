import { IProduct } from 'utils/types';

import CardItem from '../CardItem/CardItem';
import styles from './ListItems.module.scss';

const ListItems = ({ items }: { items: IProduct[] }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListItems;
