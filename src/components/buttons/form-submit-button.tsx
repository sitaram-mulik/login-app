import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useMemo } from 'react';

interface IFormSubmitButtonProps extends IKeyValuePair<any> {
    errors: IKeyValuePair<string>[];
}

export const FormSubmitButton = (props: IFormSubmitButtonProps) => {
    const { errors, ...buttonProps } = { ...props };
    const isFormInvalid: boolean = useMemo((): boolean => {
        return errors.length !== 0;
    }, [errors]);
    return (
        <div className="mt-6">
            <button
                type="submit"
                {...{ ...buttonProps }}
                disabled={isFormInvalid}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {isFormInvalid && (
                        <LockClosedIcon
                            className="h-5 w-5 text-zinc-500 group-hover:text-zinc-800"
                            aria-hidden="true"
                        />
                    )}
                </span>
                {props.children}
            </button>
        </div>
    );
};
