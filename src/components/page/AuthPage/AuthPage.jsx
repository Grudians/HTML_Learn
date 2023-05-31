import Form from "../../Form/Form"
import './AuthPage.scss'

export default function AuthPage({ signIn, signUp }) {
    return (
        <div className='auth-page'>
            {signIn && <Form
                header={'Вход'}
                linkText={'Зарегестрироваться'}
                linkTo='/signUp'
                buttonText={'Войти'}
            />}
            {signUp && <Form
                header={'Регистрация'}
                linkText={'Авторизация'}
                linkTo='/signIn'
                buttonText={'Зарегестрироваться'}
            />}

        </div>
    );
}

