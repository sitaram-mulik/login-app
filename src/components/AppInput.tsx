import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IAppInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    validate?: (id: string) => string;
    id: string;
}

export const AppInput = (props: IAppInputProps) => {
    const { label, validate, ...inputProps } = props;
    const id: string = inputProps.id;
    const error: string | undefined = validate ? validate(id) : undefined;

    return (
        <div className={`field-wrapper mb-4 ${!!error ? 'error' : ''}`}>
            {!!label && (
                <label htmlFor={id} className="sr-only">
                    {label}
                </label>
            )}
            <input
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                {...{ ...inputProps }}
            />
            {!!error && <p className="text-error">{error}</p>}
        </div>
    );
};
