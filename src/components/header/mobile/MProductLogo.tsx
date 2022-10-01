import { Popover } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

export const MProductLogo = memo((): JSX.Element => {
    return (
        <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                </div>
                <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
            </div>
        </div>
    );
});
