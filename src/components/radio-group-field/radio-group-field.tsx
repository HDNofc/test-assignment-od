import b from 'bem-react-helper';
import React from 'react';

interface Props {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  value: string | number;
  name: string;
  children: React.ReactNode;
  mix?: string;
  onChange: (checked: boolean) => void;
}

export const RadioGroupField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { checked, disabled, id, value, name, children, mix, onChange } = props;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div ref={ref} className={b('radio-group-field', { mods: { checked }, mix })}>
      <input
        className={b('radio-group-field__input')}
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onInputChange}
      />
      <label className={b('radio-group-field__label')} htmlFor={id}>
        {children}
      </label>
    </div>
  );
});
