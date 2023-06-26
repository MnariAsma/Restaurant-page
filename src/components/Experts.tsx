import React from 'react'
import { Item } from './Expert'
import ExpertItem from './Expert'
import NavBar from './navBar'
export default function Experts() {
    const expert=[
        {
            image:'equipe1',
        },
        {
            image:'equipe2',
        },
        {
            image:'equipe3',
        },
        {
            image:'equipe4',
        }
    ]
  return (
    <>
    <NavBar/>
    <section id="experts">
    <div className="leftCol titre">
        <h2>Nos <span>E</span>xperts</h2>
    </div>
    <div className="contenu">
        
           {expert.map((item: Item, index: number)=>(
            <div className="box" key={index}> 
                <ExpertItem item={item}/>
                </div>

           ))}
       
    </div>
    </section>
    </>
  )
}