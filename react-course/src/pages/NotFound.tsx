import { Link } from 'react-router-dom';
import '../styles/notfound.scss';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <p className="not-found-page__description">
                Page 404 invalid route
            </p>
            <Link className="not-found-page__link" to="/">
                To Main Page
            </Link>
        </div>
    );
}

export default NotFoundPage;
