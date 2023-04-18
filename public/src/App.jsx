import { createSignal } from "solid-js";
import { Header, Text, LanguageSelect } from './App.styles';
import IconsBar from './components/IconsBar';
import Layout from './components/Layout';
import { languages } from './languages';
import Stats from "./components/Stats";
import LanguageContext from "./context/LanguageContext";

function App() {
  const [language, setLanguage] = createSignal("en");
  const [translatedText, setTranslatedText] = createSignal(languages[language()]);
  const [selectedYear, setSelectedYear] = createSignal(2023);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setTranslatedText(languages[e.target.value]);
  };

  function parseHTML(htmlString) {
    return { innerHTML: htmlString };
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Header>
          koshelev.works
          <LanguageSelect onChange={handleLanguageChange}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="ru">RU</option>
          </LanguageSelect>
        </Header>
        <IconsBar />
        <Text {...parseHTML(translatedText().text)}></Text>
        <Stats year={selectedYear()} onYearChange={setSelectedYear} />
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;
