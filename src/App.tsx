import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  const [age, setAge] = useState(90);
  const [name, setName] = useState("Diana");
  const [bg, setBg] = useState("black");
  const [color, setColor] = useState("white");

  const alterarN = () => {
    setName("tiago");
  };

  const alterarA = () => {
    setAge(20);
  };

  const alterarAG = () => {
    setAge(90);
  };

  const alterarB = () => {
    setBg("white");
    setColor("black");
  };
  //todo arquivo que possui jsx vai para tsx pois acompanha o typescript

  return (
    <div style={{ background: bg, color: color }}>
      <Header name={name} age={age} />
      {age === 20 && <button onClick={alterarAG}>alterar idade para 90</button>}
      {age === 90 && <button onClick={alterarA}>alterar idade para 20</button>}

      <Footer />
    </div>
  );
};

export default App;
