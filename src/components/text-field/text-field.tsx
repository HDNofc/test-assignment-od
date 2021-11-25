import React from 'react';
import b from 'bem-react-helper';

interface Props {
  id?: string;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  label?: string;
  mix?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  id,
  name,
  placeholder,
  value,
  label,
  autoFocus,
  mix,
  disabled,
  error,
  errorText,
  onChange,
}: Props): React.ReactElement => {
  return (
    <div className={b('text-field', { mods: { disabled, error }, mix })}>
      <label className={b('text-field__label')} htmlFor={id}>
        {label}
      </label>
      <div className={b('text-field__input-wrapper')}>
        <input
          className={b('text-field__input')}
          id={id}
          name={name}
          placeholder={placeholder}
          type="text"
          value={value}
          disabled={disabled}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      </div>
      {error && errorText && <span className={b('text-field__error-text')}>{errorText}</span>}
    </div>
  );
};
