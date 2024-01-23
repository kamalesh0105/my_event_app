const DummyCard = ({ title, content }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

export default DummyCard;
