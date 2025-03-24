import "./App.css";
import ColorComp from "./ColorComp/ColorComp";
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

      <hr />
      <pre>Усложнение: реализуйте один компонент, который через пропс
         принимает формат генерации случайной строки
         для определения оттенка и генерирует поле ввода, вставляет,
          в него значение сгенерированного оттенка и рядом отображает данный оттенок.</pre>

      <ColorComp type={"HEX"} />
      <ColorComp type={"RGB"} />
      <ColorComp type={"RGBA"} />
    </>
  );
}

export default App;
