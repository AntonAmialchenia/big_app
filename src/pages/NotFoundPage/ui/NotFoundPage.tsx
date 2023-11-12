import { type FC } from 'react';
import { classNames } from 'shared';

import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('not_found_page')}
    </div>
  );
};
