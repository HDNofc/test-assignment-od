import React from 'react';
import b from 'bem-react-helper';

interface Props {
  children: React.ReactNode;
}

export const List__Item = ({ children }: Props) => <li className={b('list__item')}>{children}</li>;
