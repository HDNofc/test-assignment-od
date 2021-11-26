import React, { useState } from 'react';
import b from 'bem-react-helper';

interface Props {
  text: string;
  noteText: string;
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CheckboxField = ({
  text,
  noteText,
  id,
  name,
  value,
  checked,
  disabled,
  onChange = () => {},
}: Props): React.ReactElement => {
  const [focused, setFocused] = useState(false);

  const onInputFocus = () => {
    setFocused(true);
  };

  const onInputBlur = () => {
    setFocused(false);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.checked);

  return (
    <div className={b('checkbox-field', { mods: { checked, focused, disabled } })}>
      <input
        className={b('checkbox-field__input')}
        id={id}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />

      <label className={b('checkbox-field__label')} htmlFor={id}>
        <span className={b('checkbox-field__text')}>
          {text} <span className={b('checkbox-field__note-text')}>{noteText}</span>
        </span>
      </label>
    </div>
  );
};
