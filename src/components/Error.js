import React from 'react'
import s from './Error.module.css'

export const Error = (props) => {
    return (
        <div className={s.error}>{props.error}</div>
    )
}