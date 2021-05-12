import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getCharacter} from "../services/service.api";
import Character from "../character/Character";
import CharacterDescription from "../characterDescription/CharacterDescription";



export default function Description(props) {
   let {match:{params:{id}}} = props


    let[character, setCharacter]= useState({})
    useEffect(()=>{
        getCharacter(id)
            .then(value => setCharacter({...value.data}))
    },[])




    return (
        <div>
           <CharacterDescription character={character}/>
        </div>
    )
}