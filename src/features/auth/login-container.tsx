import { SyntheticEvent, useEffect, useState } from 'react';
import { AppInput } from '../../components/AppInput';
import { FormSubmitButton } from '../../components/buttons/form-submit-button';
import { MiniForm } from '../../components/forms/mini-form';
import { AuthHeader } from './auth-header';
import { OtherLoginLinks } from './other-links';

const useFormErrors = () => {
    const [errors, _setErrors] = useState<IKeyValuePair<string>[]>([]);

    useEffect(() => {
        console.log('errors ', errors);
    }, [errors]);

    const findErrorIndex = (id: string) => {
        return errors.findIndex((err: IKeyValuePair<string>) => {
            return err.id === id;
        });
    };

    const addError = (id: string, msg: string = 'The field is invalid') => {
        const index = findErrorIndex(id);
        const _errs = [...errors];
        if (index === -1) {
            _errs.push({
                id,
                msg,
            });
        }
        _setErrors([..._errs]);
    };

    const removeError = (id: string) => {
        const index = findErrorIndex(id);
        const _errs = [...errors];
        _errs.splice(index, 1);
        _setErrors([..._errs]);
    };

    const validate = (id: string): string => {
        const error: IKeyValuePair<string> | undefined = errors.find(
            (err: IKeyValuePair<string>) => {
                return err.id === id;
            },
        );
        return !!error ? error.msg : '';
    };

    return { errors, addError, removeError, validate };
};

export const LoginContainer = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { errors, addError, removeError, validate } = useFormErrors();

    const onUserNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e?.currentTarget?.value?.trim();
        const id: string = e.currentTarget.id;
        addError(id);
        if (!isNaN(Number(value))) {
            setUserName(value);
            removeError(id);
        } else {
            addError(id);
        }
    };

    const onPasswordChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e?.currentTarget?.value?.trim();
        setPassword(value);
    };

    const onSubmit = () => {};

    return (
        <MiniForm>
            <AuthHeader />
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
                <AppInput
                    label="Phone number"
                    id="phone-number"
                    type="tel"
                    required
                    placeholder="Phone number with country code"
                    pattern="[0-9]{12}"
                    value={userName}
                    onInput={onUserNameChange}
                    validate={validate}
                />
                <AppInput
                    label="Password"
                    id="password"
                    type="password"
                    required
                    placeholder="Enter password"
                    value={password}
                    onInput={onPasswordChange}
                />
            </div>
            <OtherLoginLinks />
            <FormSubmitButton errors={errors} onClick={() => alert('hey')}>
                Sign in
            </FormSubmitButton>
        </MiniForm>
    );
};
