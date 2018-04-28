import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    const languages = [
        {
            name: 'All', 
            param: 'all'
        },
        {
            name: 'Javascript', 
            param: 'javascript'
        },
        {
            name: 'Ruby', 
            param: 'ruby'
        },
        {
            name: 'Java', 
            param: 'java'
        }
    ]

    return (
        <ul>
            { languages.map(({name, param}) => (
                <li key={param}>
                    <NavLink activeStyle={{ fontWeight: 'bold'}}
                        to={`/popular/${param}`}>
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}