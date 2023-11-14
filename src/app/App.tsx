import { type FC, Suspense, useEffect } from 'react';
import { useTheme } from './providers/ThemePrivider';
import { NavBar } from 'widgets/NavBar';
import { AppRouter } from './providers/router';
import { classNames } from 'shared';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="content-page">
          <Sidebar />
          <div className="wrapper-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
