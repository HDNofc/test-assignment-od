import b from 'bem-react-helper';
import { RadioGroupField } from 'components/radio-group-field';

export interface IRadioItem {
  id: string;
  value: string | number;
  label: string | number | React.ReactElement;
  checked?: boolean;
}

interface Props {
  name: string;
  items: IRadioItem[];
  caption: string;
  mix?: string;
  onChange: (radioOption: { id: string; value: string | number; checked: boolean }) => void;
}

export const RadioGroup = ({ name, items, caption, mix, onChange }: Props) => {
  const onInputChange = ({
    id,
    value,
    checked,
  }: {
    id: string;
    value: string | number;
    checked: boolean;
  }): void => {
    onChange({ id, value, checked });
  };

  return (
    <div className={b('radio-group', { mix })}>
      <span className={b('radio-group__caption')}>{caption}</span>
      <div className={b('radio-group__items')}>
        {items &&
          items.map((radio) => (
            <RadioGroupField
              mix={b('radio-group__item')}
              key={`radio-${radio.id}`}
              id={radio.id}
              checked={radio.checked}
              name={name}
              value={radio.value}
              onChange={(checked) => onInputChange({ id: radio.id, checked, value: radio.value })}
            >
              {radio.label}
            </RadioGroupField>
          ))}
      </div>
    </div>
  );
};
