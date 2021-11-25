import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Page__Main = ({ children }: Props) => <main className="page__main">{children}</main>;
