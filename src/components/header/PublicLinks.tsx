import { memo } from 'react';
import { Link } from 'react-router-dom';
import { publicLinks } from './app-header.utility';

export const PublicLinks = memo((): JSX.Element => {
    return (
        <>
            {publicLinks.map((link) => {
                return (
                    <Link
                        to={link?.path}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        {link?.label}
                    </Link>
                );
            })}
        </>
    );
});
