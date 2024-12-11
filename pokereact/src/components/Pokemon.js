import { useState } from "react";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);

    const onSubirNivel = (event) => {
        setNivel(x => ++x);
    }

    const onBajarNivel = (event) => {
        setNivel(x => --x);
    }

    const calcularHP = () => {
        return 65 + (nivel * 3)
    }

    const calcularAtaque = () => {
        return 130 + (nivel * 2)
    }

    const calcularDefensa = () => {
        return 60 + (nivel * 2)
    }

    return <div>
        <h1>Darmanitan de galar modo zen</h1>
        <p>Nivel: {nivel}</p>
        <button onClick={onSubirNivel}>Subir nivel</button>
        <button onClick={onBajarNivel}>Bajar nivel</button>
        <p>HP: {calcularHP()}</p>
        <p>Ataque: {calcularAtaque()}</p>
        <p>Defensa: {calcularDefensa()}</p>
    </div>
}

export default Pokemon;