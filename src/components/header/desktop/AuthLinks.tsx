import { memo } from 'react';
import { Link } from 'react-router-dom';
import { authLinks, getAuthLinkClasses } from '../app-header.utility';

export const AuthLinks = memo((): JSX.Element => {
    return (
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {authLinks.map((link) => {
                return (
                    <Link
                        to={link?.path}
                        className={getAuthLinkClasses(link?.path)}
                    >
                        {link?.label}
                    </Link>
                );
            })}{' '}
        </div>
    );
});
