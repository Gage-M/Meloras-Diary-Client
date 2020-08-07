import React from 'react';

export function NiceDate(date){
    const unixDate = Date.parse(date)
    const norDate = new Date(unixDate)
    return `${norDate.getMonth()+1}/${norDate.getDate()}/${norDate.getFullYear()}`
}

export function Button({ className , ...props}){
    return <button className={['Button', className].join(' ')} {...props}/>
}

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

export function Option({className, ...props}) { 
    return (
        <option className={['option', className].join(' ')} {...props}/> 
    )
}

