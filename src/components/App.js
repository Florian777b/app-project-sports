import { useState} from 'react'


export default function App() {

    const [animal, setAnimal] = useState("Lion")
    return (
        <h1>Hello React {"Lion"}</h1>
    )
}
