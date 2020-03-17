import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = props => (
    <div>
        <TextField id="standard-basic" {...props} value={props.value || ''}  />
    </div>
);

export default Input
