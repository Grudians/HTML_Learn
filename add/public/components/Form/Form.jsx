import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Form.scss';

function Form({ header, buttonText, linkText, linkTo }) {
    return (

        <form className='form' >
            <Link to={linkTo} className='form__link' >
                {linkText}
            </Link>
            <h1 className='form__header'>{header}</h1>
            <fieldset className='form__fieldset'>
                <input placeholder='Логин' type='text' className='form__input' />
            </fieldset>
            <fieldset className='form__fieldset'>
                <input placeholder='Пароль' type='password' className='form__input' />
            </fieldset>
            <fieldset className='form__fieldset form__check-wrap'>
                <input type="checkbox" className='form__check ' id="check" />
                <label for="check" className='form__check-text '>Я согласен получать обновления на почту</label>
            </fieldset>
            <div className='form__btn-wrap'>
                <Button>{buttonText}</Button>
            </div>
        </form>
    );
}
export default Form
