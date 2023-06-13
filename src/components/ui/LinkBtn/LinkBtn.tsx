import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkBtn.module.scss';

type Props = {
  path: string;
  text: string;
};

const LinkBtn: FC<Props> = props => {
  return (
    <Link className={styles.link} to={props.path}>
      {props.text}
    </Link>
  );
};

export default LinkBtn;
