import React from 'react';
//import { I18nextProvider } from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../components/providers/ThemeProvider/ThemeProvider';
import { LangProvider } from '../components/providers/LangProvider/LangProvider';
import '../components/providers/ThemeProvider/themes.css';
//import { Logo } from 'src/components/Logo/Logo';
import { Header } from '../components/Header/Header';
import { ShowWnd } from '../components/ModalWindow/ShowWnd';
import { ProductsMoreButton } from '../components/ProductsMoreButton/ProductsMoreButton';
//import { Layout } from 'src/components/Layout/Layout';
//import { ModalWindow } from 'src/components/ModalWindow/ModalWindow';
//import { CartButton } from 'src/components/CartButton/CartButton';
//import { Product } from 'src/components/Product/Product';
//import { ProductDescShort } from 'src/components/ProductDescShort/ProductDescShort';
//import { ProductDescFull } from 'src/components/ProductDescFull/ProductDescFull';

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      {/* <ThemeProvider> */}
        <LangProvider>
          {/* <LangProvider> */}
        {/* <I18nextProvider i18n={i18n}>
          <LangProvider> */}

          <div className="App">
            <header className="App-header">
              <Header />
              <ShowWnd />
              <ProductsMoreButton />

              {/* <Logo/> */}
              {/* <Layout /> */}
              {/* <ModalWindow visible='true' children='' /> */}
              {/* <CartButton count={0} /> */}
              {/* <Product /> */}
              {/* <ProductDescShort /> */}
              {/* <ProductDescFull  /> */}

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
