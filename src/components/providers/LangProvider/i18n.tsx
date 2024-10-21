import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: ['en','ru'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description:{
            part1: "Edit <code>src/App.js</code> and save to reload.",
            part2: "(English) My Name is Nikolay, blah-blah-blah."
                +"<br/>My Telegram: @sakharov_n_a"
          }
        }
      },
      ru: {
        translation: {
          // here we will place our translations...
          description:{
            part1: "Измените <code>src/App.js</code> and сохраните для перезагрузки.",
            part2: "(Русский) Меня зовут Николай, я ведущий инженер-программист в компании ООО &quot;Цифровые технологии 1520&quot; (<a>https://dt1520.ru</a>)."
                +"<br/>Я более 20 лет занимаюсь разработкой автоматизированных систем для ОАО &quot;РЖД&quot;, АО &quot;Росжелдорпроект&quot; и других проектных институтов на ж.д. транспорте (РЖД, метро и пр.)."
                +"<br/>Основные мои направления: АС ФС (система формирования спецификаций оборудования и материалов), АСУ-Ш-2 (автоматизированная система управления хозяйством СЦБ на ж.д. транспорте)."
                +"<br/>Применяемые в разработке языки и технологии: C#, VB.NET, Delphi, .NET Framework, .NET Core, JavaScript, ExtJS Framework, MSSQL, PostgreSQL, SVN."
                +"<br/>Мне хотелось бы познакомиться с современными направлениями и технологиями разработки, лучше узнать использование git, unit-тестирование и т.д."
                +"<br/>Мой телеграм: @sakharov_n_a"
          }
        }
      }
    }
  });

export default i18n;