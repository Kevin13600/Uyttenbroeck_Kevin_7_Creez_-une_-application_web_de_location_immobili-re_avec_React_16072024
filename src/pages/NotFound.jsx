import { Link } from "react-router-dom";
import "../sass/pages/_notfound.scss"

function NotFound() {
  return (
    
      <div className="notfound">
        <h1 className="notfound__number">404</h1>
        <p className="notfound__p">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="notfound__backhome" to="/">Retourner sur la page d'accueil</Link>
      </div>
    
  );
}

export default NotFound;