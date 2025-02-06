import React from "react";

import classes from './nav.module.scss';
import { useRouter } from "next/router";

export default function Navigation() {
    const { push } = useRouter();

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
            <ul className={`grid space-between ${classes.list}`}>
                {
                    navigationButtons.map((button) => {
                        const {key, name, link} = button;
                        return (
                            <li key={key}>
                                <a onClick={() => push(link)} className={`link text-16 text-color--light`}>
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