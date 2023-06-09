import { FC } from 'react';

import styles from './IconHeaderBtn.module.scss';

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
};

const IconHeaderBtn: FC<Props> = props => {
  return (
    <button onClick={props.onClick}>
      <img className={styles.icon} src={props.src} alt={`${props.alt} icon`} />
    </button>
  );
};

export default IconHeaderBtn;
