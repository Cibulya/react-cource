import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/notfound.scss';

class NotFoundPage extends React.Component {
    render(): React.ReactNode {
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
}

export default NotFoundPage;
