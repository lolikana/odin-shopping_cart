import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
};

const IconBtn: FC<Props> = props => {
  return (
    <button onClick={props.onClick}>
      <img src={props.src} alt={`${props.alt} icon`} />
    </button>
  );
};

export default IconBtn;
