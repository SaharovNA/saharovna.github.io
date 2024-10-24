import React, { useContext } from "react";
import { useTranslation, Trans } from 'react-i18next';
import { LangContext, LangProvider } from '../providers/LangProvider/LangProvider';

export const LangSwitcher = () => {
  const { language, toggleLanguage } = useContext(LangContext);

  return (
    <div>
      <p>
        Текущий язык: <strong>{language}</strong>
      </p>
      <button onClick={toggleLanguage}>Переключить язык</button>
    </div>
  );
};

/*
Stories Language Example
*/
const ViewLangSwitcherExapmple = () => {
  const { language, toggleLanguage } = useContext(LangContext);
  const { t } = useTranslation();

  return (
    <div>
      <h3>Пример использования LangSwitcher</h3>
      <LangSwitcher />
      <p>
        Текущий язык: <strong>{language}</strong>
      </p>
      <p>
        {t('description.part2')}
      </p>
    </div>
  );
};

export const LangSwitcherExample = () => {
  return (
    <LangProvider>
      <ViewLangSwitcherExapmple />
    </LangProvider>
  );
};
