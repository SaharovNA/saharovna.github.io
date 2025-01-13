import React from 'react';
//import { I18nextProvider } from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { LangProvider } from './providers/LangProvider/LangProvider';
import './providers/ThemeProvider/themes.css';
import { Header } from '../features/Header/Header';
import { ShowWnd } from '../features/ModalWindow/ShowWnd';


function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      {/* <ThemeProvider> - Почему-то в примерах провайдеры вложены друг в друга по 2 раза */}
        <LangProvider>
          {/* <LangProvider> */}
        {/* <I18nextProvider i18n={i18n}>
          <LangProvider> */}

          <div className="App">
            <header className="App-header">
              <Header />
              <ShowWnd />

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <Trans i18nKey="description.part1">
                  Edit <code>src/App.js</code> and save to reload.
                </Trans>
              </p>
              <p>
                {t('description.part2')}
              </p>
            </header>
          </div>

          {/* </LangProvider>
          </I18nextProvider> */}
          {/* </LangProvider> */}
        </LangProvider>
      {/* </ThemeProvider> */}
    </ThemeProvider>
  );
}

export default App;
