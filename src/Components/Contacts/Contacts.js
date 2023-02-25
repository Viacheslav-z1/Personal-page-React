import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <a
        className="contacts__link contacts-mail"
        href="mailTo:slavik.zaliotnyi@gmail.com"
      >
        Email
      </a>
      <a
        className="contacts__link contacts-linkedin"
        href="https://www.linkedin.com/in/viacheslav-zalotnyi-86695a23b/"
        target='blank'
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Contacts;
