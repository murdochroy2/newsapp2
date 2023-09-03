import React, { Component } from 'react'
import loading from '../loader.gif'
export const Spinner = () => {
    return (
        <div className='text-center'><img src={loading} alt="loading"></img></div>
    )
}
export default Spinner