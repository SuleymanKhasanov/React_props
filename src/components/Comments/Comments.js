import "./Comments.css";

function Comments(props) {
  const { name, text, img } = props;
  return (
    <div className="container">
      <div className="coments">
        <img src={img} className="coments__user-img" alt="user-logo" />
        <div className="cooments__block">
          <h4 className="comments__user-name">{name}</h4>
          <p className="comment__text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
