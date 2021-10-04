function Features() {
  return (
    <div className="features">
      <div className="features__heading1">
        <p className="features__heading1__top">FEATURES</p>
      </div>
      <div className="features__heading2">
        <p className="features__heading2__left">
          Chemswot Offers the
          <br />
          Following Main Benefits
        </p>
        <p className="features__heading2__right">
          Our Resources will help you achieve your dream Ib score diploma by our
          accurate topic detail capturing
        </p>
      </div>
      <div className="features__cards">
        <Card
          text="Includes designed Mindmaps and puzzles"
          heading="Accurate Notes"
          img="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-notebook-elearning-and-education-justicon-lineal-color-justicon.png"
        />
        {/* {/* <Card/> */}
        <Card
          heading="Animated PPT's"
          text="Includes textbook questions and examples"
          img="https://img.icons8.com/color/48/000000/ms-powerpoint--v1.png"
        />
        <Card
          heading="Topicwise Quiz"
          img="https://img.icons8.com/bubbles/50/000000/todo-list.png"
          text="Includes MCQ Paper 1type questions"
        />
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img alt="" src={props.img} />
      </div>
      <div className="card__heading">{props.heading}</div>
      <div className="card__text">{props.text}</div>
    </div>
  );
};

export default Features;
