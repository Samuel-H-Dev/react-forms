import { useState } from "react"



export default function ControlledComponents(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return(
        <>
        <h2>Controlled Components</h2>
        <p>Form fields in HTML typicallt manage their own state.</p>
        <p>In a <strong>Controlled component</strong> we let the react  component take control of that state using <code>value</code> and <code>onChange</code></p>
        <h3>You typed: {firstName} {lastName}</h3>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName"  type="text" 
                onChange={e => setFirstName(String(e.target.value))}  />

        <label htmlFor="lastName">last Name:</label>
        <input name="lastName"  type="text" 
        onChange={e => setLastName(String(e.target.value))}  />
        </>

    )

} 