import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation('common');
  return <div>{t('main_page')}</div>;
};

export default MainPage;
