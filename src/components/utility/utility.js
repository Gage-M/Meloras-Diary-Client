import React from 'react';

export function Input({className, ...props}){
    return (
        <input className={['Input', className].join(' ')} {...props}/>
    )
}

export function Required({className, ...props}){
    return (
        <span className={['Required', className].join(' ')} {...props}>
            &#42;
        </span>
    )
}

export function Textarea({className, ...props}) {
    return (
        <textarea className={['Textarea', className].join(' ')} {...props} />
    )
}

