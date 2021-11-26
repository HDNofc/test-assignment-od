import { useState } from 'react';

import { Page, Page__ActionButton, Page__Main } from 'components/page';
import { Button } from 'components/button';
import { Dialog } from 'components/dialog';

export const Main = (): React.ReactElement => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const onOpenDialogClick = () => {
    setDialogIsOpen(true);
  };

  const onCloseDialogClick = () => {
    setDialogIsOpen(false);
  };

  return (
    <Page>
      <Page__Main>
        <Page__ActionButton>
          <Button type="standard" theme="outline" onClick={onOpenDialogClick}>
            Налоговый вычет
          </Button>
        </Page__ActionButton>

        <Dialog isOpen={dialogIsOpen} onCloseButtonClick={onCloseDialogClick} />
      </Page__Main>
    </Page>
  );
};
