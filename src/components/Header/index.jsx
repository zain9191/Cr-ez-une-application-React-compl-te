import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/"> Accueil</Link>
      <br></br>
      <Link to="/survey/1"> Questionnaire</Link>
      <br></br>

      <Link to="/freelance"> FreeLance</Link>
    </nav>
  );
}

export default Header;
