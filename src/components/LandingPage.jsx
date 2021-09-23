import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <section className="name">
                <h1>Recanto dos mouros</h1>
            </section>

            <section className="menu">
                <Link to='menu'>Refeições</Link>
            </section>
        </div>
    )
}
