import {useEffect, useState} from "react";
import {getCharacters} from "../services/service.api";


export default function Description(props) {
    let {match: {params: {id}}} = props


    let [characters, setCharacters] = useState([])


    useEffect(() => {
        getCharacters()
            .then(value => setCharacters(value.data))
    }, [])


    return (
        <div>
            <h3>{`${characters[id - 1]?.id}.
             ${characters[id - 1]?.name.first} ${characters[id - 1]?.name.middle} ${characters[id - 1]?.name.last}`}</h3>
            <p>
                {`age: ${characters[id - 1]?.age}, gender: ${characters[id - 1]?.gender},
            species: ${characters[id - 1]?.species}`}
            </p>
        </div>
    )

}

