import React from "react";
import { useRouter } from "next/router";
// import classes from './nav.module.scss';


export default function Navigation() {

    const navigationButtons = [
        {
            key: 'link',
            name: 'Home',
            link: '/',
        },
        {
            key: 'link',
            name: 'Blog',
            link: '/blog',
        },
        {
            key: 'link',
            name: 'About us',
            link: '/about',
        },
        {
            key: 'link',
            name: 'Contact us',
            link: '/contact',
        }
    ]
    return (
        <nav>
            <ul className={`grid space-between `}>
                {
                    navigationButtons.map((button) => {
                        const {key, name, link} = button;
                        return (
                            <li key={key}>
                                <a onClick={() => {}} className={`link text-16 text-color--light`}>
                                    {name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}