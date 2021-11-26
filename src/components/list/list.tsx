import React from 'react';
import b from 'bem-react-helper';

interface Props {
  children: React.ReactNode;
  caption: string;
  mix?: string;
}

export const List = ({ children, caption, mix }: Props) => {
  return (
    <div className={b('list', { mix })}>
      <span className={b('list__caption')}>{caption}</span>
      <ul className={b('list__content')}>{children}</ul>
    </div>
  );
};
