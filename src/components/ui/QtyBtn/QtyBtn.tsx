import DeleteIcon from '@/assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg';

import styles from './QtyBtn.module.scss';

type Props = {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  stock: number;
};

const QtyBtn = (props: Props) => {
  return (
    <div className={styles.container}>
      <button
        className={[styles.btn, styles['btn-decrease']].join(' ')}
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? (
          <img
            className={styles['btn-delete-img']}
            src={DeleteIcon}
            alt="delete item icon"
          />
        ) : (
          '-'
        )}
      </button>
      <p className={styles.qty}>{props.qty}</p>
      <button
        className={[styles.btn, styles['btn-increase']].join(' ')}
        onClick={props.onIncrease}
        disabled={props.stock === props.qty}
      >
        +
      </button>
    </div>
  );
};

export default QtyBtn;
