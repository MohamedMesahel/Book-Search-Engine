// Establishing button fuction from react to get red of the warning message.
import React from 'react';
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

export default FancyButton;