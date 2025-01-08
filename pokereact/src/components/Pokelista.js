import axios from "axios";
import { useEffect, useState } from "react";

const PokeLista = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
            setPokemons(response.data.results);
        })
    }, [])

    const funcionNavegarASnivy = () => {
        navigate("/pokemon/495");
    }

    return <div>
        <Link to="/pokemon/25">Ir a Pikachu</Link>
        <h1>Lista</h1>
        {pokemons.map(p => {
            <div>
                <p onClick={() => {navigate(`/pokemon/${p.name}`)}}>¿Cuál es este pokemon? Es... {p.name}</p>
                <Link to={"/pokemon/"+p.name}>Navegar</Link>
            </div>
        })}
    </div>
}

export default PokeLista;