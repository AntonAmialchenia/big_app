import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames } from 'shared';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('unexpected_error')}</p>
      <Button onClick={reloadPage}>{t('refresh')}</Button>
    </div>
  );
};
