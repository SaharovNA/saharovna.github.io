import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Меня зовут Николай, я ведущий инженер-программист в компании ООО &quot;Цифровые технологии 1520&quot; (<a>https://dt1520.ru</a>).
          <br/>
          Я более 20 лет занимаюсь разработкой автоматизированных систем для ОАО &quot;РЖД&quot;, АО &quot;Росжелдорпроект&quot; и других проектных институтов на ж.д. транспорте (РЖД, метро и пр.).
          <br/>
          Основные мои направления: АС ФС (система формирования спецификаций оборудования и материалов), АСУ-Ш-2 (автоматизированная система управления хозяйством СЦБ на ж.д. транспорте).
          <br/>
          Применяемые в разработке языки и технологии: C#, VB.NET, Delphi, .NET Framework, .NET Core, JavaScript, ExtJS Framework, MSSQL, PostgreSQL, SVN.
          <br/>
          Мне хотелось бы познакомиться с современными направлениями и технологиями разработки, лучше узнать использование git, unit-тестирование и т.д.
          <br/>
          Мой телеграм: @sakharov_n_a, email: n.saharov@dt1520.ru
        </p>
      </header>
    </div>
  );
}

export default App;
