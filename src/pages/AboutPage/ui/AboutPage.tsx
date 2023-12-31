import { type FC, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');
  return <div>{t('about_page')}</div>;
};

export default AboutPage;
