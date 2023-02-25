import "./Bio.css";


function Bio() {
  return (
    <div className="bio">
      <h1 className="bio__name">Zalotnyi Viacheslav</h1>
      <h5 className="bio__position">Frontend React.js Developer</h5>
      <a href="mailTo:slavik.zaliotnyi@gmail.com" className="bio_site">
        slavik.zaliotnyi@gmail.com
      </a>
    </div>
  );
}

export default Bio;