interface Props {
  children: React.ReactNode;
}

export const Page__ActionButton = ({ children }: Props) => (
  <div className="page__action-button">{children}</div>
);
