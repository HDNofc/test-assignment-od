import b from 'bem-react-helper';

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  buttonType?: 'submit' | 'reset' | 'button';
  theme?: 'primary' | 'outline';
  type?: 'standard' | 'text';
  size?: 'big' | 'small';
  onlyIcon?: boolean;
  wide?: boolean;
  disabled?: boolean;
  mix?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: Props): React.ReactElement => {
  const {
    children = null,
    buttonType = 'button',
    theme,
    type,
    onlyIcon,
    icon,
    mix,
    disabled,
    wide,
    onClick,
  } = props;

  return (
    <button
      className={b('button', { mods: { theme, type, disabled, wide, onlyIcon }, mix })}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      <span className={b('button__text')}>{children}</span>
    </button>
  );
};
