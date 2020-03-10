import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = props => {
    const { label } = props;
    
    return (
        <div>
            <TextField id="standard-basic" label={label} {...props} />
        </div>
    );
}

export default Input
