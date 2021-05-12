import {useEffect, useState} from "react";
import {getCharacters} from "../services/service.api";
import Character from "../character/Character";

export default function Characters({match:{url}}) {

    let [characters, setCharacters] = useState([])
    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]))
    }, [])

    return (
        <div>
            {
                characters.map(value => <Character item={value} name={value.name} image={value.image} url={url}/>)
            }
        </div>
    )
}
