import React from 'react';
import b from 'bem-react-helper';
import NumberFormat from 'react-number-format';

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
  suffix?: string;
  isNumericString?: boolean;
  thousandSeparator?: string;
  allowNegative?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onBlur?: () => void;
  onValueChange?: (value: any) => void;
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
  suffix,
  isNumericString,
  thousandSeparator,
  allowNegative,
  onChange,
  onBlur,
  onValueChange,
  onKeyDown,
}: Props): React.ReactElement => {
  return (
    <div className={b('text-field', { mods: { disabled, error }, mix })}>
      <label className={b('text-field__label')} htmlFor={id}>
        {label}
      </label>
      <div className={b('text-field__input-wrapper')}>
        <NumberFormat
          className={b('text-field__input')}
          id={id}
          name={name}
          placeholder={placeholder}
          type="text"
          value={value}
          disabled={disabled}
          autoFocus={autoFocus}
          onChange={onChange}
          onBlur={onBlur}
          isNumericString={isNumericString}
          thousandSeparator={thousandSeparator}
          allowNegative={allowNegative}
          onValueChange={onValueChange}
          suffix={suffix}
          onKeyDown={onKeyDown}
        />
      </div>
      {error && errorText && <span className={b('text-field__error-text')}>{errorText}</span>}
    </div>
  );
};
