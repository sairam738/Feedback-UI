import PropTypes from "prop-types";

function Button({children, version, type, isDisabled}){
    return (
        <button type = {type} disabled={isDisabled} className={`btn btn-${version}`} >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: 'False'
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button
