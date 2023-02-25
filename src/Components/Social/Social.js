import "./Social.css"

function Social() {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a target="blank" href="#" className="social__link">
            <img
              src="images/twitter.svg"
              alt="twitter"
              className="social__img"
            />
          </a>
        </li>
        <li className="social__item">
          <a target="blank" href="google.com" className="social__link">
            <img
              src="images/facebook.svg"
              alt="facebook"
              className="social__img"
            />
          </a>
        </li>
        <li className="social__item">
          <a
            target="blank"
            href="https://www.instagram.com/slavikqwx/"
            className="social__link"
          >
            <img src="images/inst.svg" alt="inst" className="social__img" />
          </a>
        </li>
        <li className="social__item">
          <a
            target="blank"
            href="https://github.com/Viacheslav-z1"
            className="social__link"
          >
            <img src="images/git.svg" alt="git" className="social__img" />
          </a>
        </li>
      </ul>
    </div>
  );
}


export default Social;