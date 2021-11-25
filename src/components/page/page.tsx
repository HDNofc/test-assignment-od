import React from 'react';
import b from 'bem-react-helper';

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => <div className={b('page')}>{children}</div>;
