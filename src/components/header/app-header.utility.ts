export interface INavItem {
    path: string;
    label: string;
}

export const publicLinks: INavItem[] = [
    {
        path: '',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
]

export const authLinks: INavItem[] = [
    {
        path: '/signup',
        label: 'Sign up'
    },
    {
        path: '/login',
        label: 'Log in'
    },

]

export const getAuthLinkClasses = (path: string): string => {
    return `whitespace-nowrap text-base font-medium ${path === '/login' ? 'ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700' : 'text-gray-500 hover:text-gray-900'}`;
};

export const getAuthLinkClassesForMobile = (path: string): string => {
    return `text-base font-medium ${path === '/login' ? 'flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700' : 'mt-6 text-center'}`;
};


