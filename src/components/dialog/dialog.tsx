import React from 'react';
import b from 'bem-react-helper';
import { TextField } from 'components/text-field';
import { Button } from 'components/button';
import { ReactComponent as CloseButtonIcon } from './__close-button/dialog__close-button.svg';

interface Props {
  isOpen?: boolean;
  onCloseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const Dialog = ({ children, isOpen, onCloseButtonClick }: Props): React.ReactElement => {
  if (!isOpen) return <> {children} </>;

  return (
    <div className={b('dialog', { mix: b('dialog__backdrop') })}>
      <div className={b('dialog__window')}>
        <Button
          mix={b('dialog__close-button')}
          icon={<CloseButtonIcon />}
          onlyIcon
          onClick={onCloseButtonClick}
        >
          Закрыть диалоговое окно
        </Button>
        <h2 className={b('dialog__title')}>Налоговый вычет</h2>
        <p className={b('dialog__description')}>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
          составляет не более 13% от своего официального годового дохода.
        </p>

        <TextField
          mix={b('dialog__field')}
          label="Ваша зарплата в месяц"
          placeholder="Введите данные"
          errorText="Поле обязательно для заполнения"
          onChange={() => {}}
          autoFocus
        />

        <Button mix={b('dialog__calculate')} type="text">
          Рассчитать
        </Button>

        <Button mix={b('dialog__add-button')} type="standard" theme="primary" wide>
          Добавить
        </Button>
      </div>
    </div>
  );
};
