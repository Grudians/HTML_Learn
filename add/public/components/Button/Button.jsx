import './Button.scss'


export default function Button({children , outline}) {
    return <button className={'button ' + (outline ? 'button_outline' : '')} >
        {children}
    </button>
}
