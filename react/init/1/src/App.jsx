import "./App.css";
import Header from "./Header/Header";
import Steamdb from "./steamdb/Steamdb";

function App() {
  return (
    <>
      <hr />
      <pre>Реализуйте компонент вида (https://steamdb.info/)</pre>

      <Steamdb></Steamdb>

      <hr />
      <pre>
        Создайте компонент для отображения предствления вида Текстовые данные и
        счётчики хранить в виде отдельных ”стэйтов” и вставлять с помощью
        интерполяции.
      </pre>

      <Header></Header>

      
    </>
  );
}

export default App;
