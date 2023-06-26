import React from 'react'
import { useState } from 'react'

export default function ReservationForm() {
  const [prénom, setPrénom]=useState("")
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [nbp, setNB]=useState("")
  const [date, setDate]=useState("")
  const [heure, setHeure]=useState("")
  const [demande, setDemande]=useState("")
  const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        
        prénom,
        lastName,
        email,
        nbp,
        dateDarrivée:date,
        heure,
        demande,
        author: 1,
        date: new Date(Date.now()).toDateString(),
      }),
    });
    setPrénom("");
    setLastName("");
    setEmail("");
    setNB("");
    setDate("");
    setHeure("");
    setDemande("");
  };
  

  return (
    <>
     <section id="formContact" className="contact">
    <main> 
            <h1>Contactez-nous</h1>
            <p>Merci de compléter le formulaire suivant pour nous contacter. Tous les champs de ce formulaire sont requis.</p>
            <form  
            onSubmit={(e)=>{handleSubmit(e);}}>
                <div>
                   <div>
                     <label >prénom</label> 
                     <input type="text"  required onChange={(e) => setPrénom(e.target.value)}
    value={prénom}/>
                   </div>
                   <div>
                     <label >nom de famille</label> 
                     <input type="text" required onChange={(e) => setLastName(e.target.value)}
    value={lastName}/>
                   </div> 
                   <div>
                     <label >votre e-mail</label> 
                     <input type="email" required onChange={(e) => setEmail(e.target.value)}
    value={email}/>
                   </div>
                   <div>
                    <label >Nombre de personne</label>
                    <input type="number" required onChange={(e) => setNB(e.target.value)}
    value={nbp}/>
                   </div>
                   <div>
                    <label>Date d'arrivée</label>
                    <input type="date" required onChange={(e) => setDate(e.target.value)}
    value={date}/>
                   </div>
                   <div>
                    <label >Heure d'arrivée</label>
                    <input type="time" required onChange={(e) => setHeure(e.target.value)}
    value={heure}/>
                   </div>
                </div>
                <div>
                <div>
                    <label >Demandes spéciales</label>
                    <textarea typeof='text' onChange={(e) => setDemande(e.target.value)}
    value={demande}></textarea>
               </div>
              </div>
              <button type="submit">Envoyer</button>
              </form>
            </main> 
            </section>
            </>
  )
}