import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Comments from "./components/Comments/Comments";
import commentsArray from "./components/Comments/data-array";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Comments
        name={commentsArray[0].name}
        text={commentsArray[0].text}
        img={commentsArray[0].img}
      />
      <Comments
        name={commentsArray[1].name}
        text={commentsArray[1].text}
        img={commentsArray[1].img}
      />
      <Comments
        name={commentsArray[2].name}
        text={commentsArray[2].text}
        img={commentsArray[2].img}
      />
      <Comments
        name={commentsArray[3].name}
        text={commentsArray[3].text}
        img={commentsArray[3].img}
      />
    </div>
  );
}

export default App;
