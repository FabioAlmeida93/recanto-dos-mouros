import React, { useEffect, useState } from 'react'
import { produtos } from '../data.json';

export default function Menu() {

    return (
        <div className='menu-page'>
            <section className="menu-container">
                {
                    produtos.map(items => {
                        return (
                            <section key={items.id}>
                                <section className="container">
                                    <div className="img-box">
                                        <img src={items.imageUrl} alt={items.title} />
                                    </div>
                                    <h3>{items.title}</h3>
                                    <p>{items.description}</p>
                                    <div className="price">
                                        <p>{items.price}</p>
                                    </div>
                                </section>
                            </section>
                        )
                    })
                }
            </section>
        </div>
    )
}
