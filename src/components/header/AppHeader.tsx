/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AuthLinks } from './desktop/AuthLinks';
import { ProductLogo } from './desktop/ProductLogo';
import { MAuthLinks } from './mobile/MAuthLinks';
import { MProductLogo } from './mobile/MProductLogo';
import { PublicLinks } from './PublicLinks';

export default () => {
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <ProductLogo />
                    <Popover.Group
                        as="nav"
                        className="hidden space-x-10 md:flex"
                    >
                        <PublicLinks />
                    </Popover.Group>
                    <AuthLinks />
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <MProductLogo />
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 ">
                                <PublicLinks />
                            </div>
                            <MAuthLinks />
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};
