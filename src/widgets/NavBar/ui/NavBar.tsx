import { type FC } from 'react';

import cls from './NavBar.module.scss';
import { AppLink, classNames } from 'shared';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
