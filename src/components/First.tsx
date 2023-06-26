import React from 'react'
import { Link } from 'react-router-dom'
const PageAceuil=()=>(
    <section id="pageContent" className="firstPage">
    <div className="contenu">
        <h2>Que Des Plats délicieux</h2>
        <Link to='/Menu' className="bt1">Notre Menu</Link>
        <Link to='/Reservation' className="bt2">Reservation</Link>
        </div>
</section>
)
export default PageAceuil 