import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import b from 'bem-react-helper';
import * as Yup from 'yup';

import { TextField } from 'components/text-field';
import { Button } from 'components/button';
import { ReactComponent as CloseButtonIcon } from './__close-icon/dialog__close-icon.svg';
import { CheckboxField } from 'components/checkbox-field';
import { List, List__Item } from 'components/list';
import { DEDUCTION_LIMIT } from 'constants/deduction-limit';
import { RadioGroup } from 'components/radio-group';
import { numeralize } from 'helpers/numeralize';

interface Props {
  isOpen?: boolean;
  onCloseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

interface PaymentObject {
  id: string;
  value: string;
  name: string;
  text: string;
  noteText: string;
  checked: boolean;
}

export const Dialog = ({ children, isOpen, onCloseButtonClick }: Props): React.ReactElement => {
  const [isCounted, setIsCounted] = useState(false);
  const paymentArray = useRef<PaymentObject[]>([] as PaymentObject[]);

  const formik = useFormik({
    initialValues: {
      salary: '',
      payments: {},
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      salary: Yup.string()
        .max(9, 'Мне бы такую зарплату!')
        .required('Поле обязательно для заполнения'),
    }),
  });

  const calculateDeduction = () => {
    const salaryForTheYear = parseInt(formik.values.salary) * 12;
    const deductionPerYear = Math.min(Math.round(salaryForTheYear * 0.13), DEDUCTION_LIMIT);
    const deductionLastYear = DEDUCTION_LIMIT % deductionPerYear;
    const yearsWithMaxPayment = Math.floor(DEDUCTION_LIMIT / deductionPerYear);
    const totalYearsOfPayment = yearsWithMaxPayment + (deductionLastYear ? 1 : 0);

    const arrayOfPayments = [];

    for (let index = 1; index <= totalYearsOfPayment; index++) {
      if (yearsWithMaxPayment >= index) {
        arrayOfPayments.push(getPaymentObject({ index, payment: deductionPerYear, checked: true }));
      } else {
        arrayOfPayments.push(getPaymentObject({ index, payment: deductionLastYear }));
      }
    }

    arrayOfPayments.forEach((el) => {
      formik.setFieldValue(`payments.${el.id}`, {
        checked: el.checked,
        value: el.value,
      });
    });

    paymentArray.current = arrayOfPayments;

    function getPaymentObject({
      index,
      payment,
      checked = false,
    }: {
      index: number;
      payment: number;
      checked?: boolean;
    }) {
      const noteText =
        index === 2
          ? `во ${index}-${numeralize(index)} год`
          : `в ${index}-${numeralize(index)} год`;
      return {
        id: `payment-${index.toString()}`,
        value: `${payment}`,
        name: 'check-1',
        text: `${payment} рублей`,
        noteText: noteText,
        checked,
      };
    }
  };

  const onCalculateButtonClick = () => {
    formik.validateForm();

    if (formik.isValid && formik.dirty) {
      calculateDeduction();
      setIsCounted(true);
    }
  };

  if (!isOpen) return <> {children} </>;

  return (
    <div className={b('dialog', { mix: b('dialog__backdrop') })}>
      <div className={b('dialog__window')}>
        <Button
          mix={b('dialog__close-button')}
          icon={<CloseButtonIcon className={b('dialog__close-icon')} />}
          onClick={onCloseButtonClick}
          onlyIcon
        >
          Закрыть диалоговое окно
        </Button>
        <h2 className={b('dialog__title')}>Налоговый вычет</h2>
        <p className={b('dialog__description')}>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
          составляет не более 13% от своего официального годового дохода.
        </p>

        <form className={b('dialog__form')} onSubmit={formik.handleSubmit}>
          <TextField
            id="salary"
            mix={b('dialog__field')}
            label="Ваша зарплата в месяц"
            placeholder="Введите данные"
            errorText={formik.errors.salary ? formik.errors.salary : ''}
            value={formik.values.salary}
            error={formik.errors.salary ? true : false}
            suffix=" ₽"
            onValueChange={(value) => formik.setFieldValue('salary', value.floatValue)}
            autoFocus
            isNumericString={true}
            thousandSeparator={' '}
            allowNegative={false}
          />

          <Button mix={b('dialog__calculate')} type="text" onClick={onCalculateButtonClick}>
            Рассчитать
          </Button>

          {isCounted && (
            <List
              mix={b('dialog__payment-list')}
              caption="Итого можете внести в качестве досрочных:"
            >
              {paymentArray.current.map((el) => {
                return (
                  <List__Item key={el.id}>
                    <CheckboxField
                      id={el.id}
                      name={el.name}
                      onChange={(checked) =>
                        formik.setFieldValue(`payments.${el.id}.checked`, checked)
                      }
                      text={el.text}
                      noteText={el.noteText}
                      // @ts-ignore
                      checked={formik.values.payments[el.id].checked}
                      value={el.value}
                    />
                  </List__Item>
                );
              })}
            </List>
          )}

          <Button
            mix={b('dialog__add-button')}
            buttonType="submit"
            type="standard"
            theme="primary"
            wide
          >
            Добавить
          </Button>

          <RadioGroup
            mix={b('dialog__payment-choose')}
            name={`radio-group`}
            caption="Что уменьшаем?"
            items={[
              { id: 'radio-1', value: 'payment', label: 'Платеж', checked: true },
              { id: 'radio-2', value: 'term', label: 'Срок', checked: false },
            ]}
            onChange={() => {}}
          />
        </form>
      </div>
    </div>
  );
};
