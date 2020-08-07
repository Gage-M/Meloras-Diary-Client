import React from 'react'


export default function TableHeader(props)  {
    return (
        <div className='table__header'>
            <div className='info_cap character_name'><p>Character name</p></div>
            <div className='info_cap background'><p>Background or Role</p></div>
            <div className='info_cap race'><p>Race</p></div>
            <div className='info_cap alignment'><p>Alignment</p></div>
        </div>
    )
}