import Form from "./Component/Form";
import Header from "./Component/Header";
import "./Style.scss";
import bannerImg from "./assests/banner.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Form />
        <div className="banner">
          <img src={bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default App;
