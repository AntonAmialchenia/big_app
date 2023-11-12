import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton, classNames } from 'shared';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation('common');

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}>
      {t('language')}
    </Button>
  );
};
