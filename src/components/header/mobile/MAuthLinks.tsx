import { memo } from 'react';
import { Link } from 'react-router-dom';
import { authLinks } from '../app-header.utility';

export const MAuthLinks = memo((): JSX.Element => {
    return (
        <div>
            {authLinks.map((link) => {
                if (link?.path === '/signup') {
                    return (
                        <p className="mb-6 text-center text-base font-medium text-gray-500">
                            Existing customer?{' '}
                            <Link
                                to={link?.path}
                                className="text-indigo-600 hover:text-indigo-500"
                            >
                                {link?.label}
                            </Link>
                        </p>
                    );
                }
                return (
                    <Link
                        to={link?.path}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        {link?.label}
                    </Link>
                );
            })}
        </div>
    );
});
