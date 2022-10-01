import { memo } from 'react';
import { Link } from 'react-router-dom';

export const NavItem = memo((): JSX.Element => {
    return (
        <div className="flex justify-start">
            <Link to="">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                />
            </Link>
        </div>
    );
});
