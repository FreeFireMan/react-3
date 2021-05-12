import {useEffect, useState} from "react";
import {getInventories} from "../services/service.api";

export default function (props) {
    let {match: {params: {id}}} = props
    let [listItem, setListItem] = useState([])
    useEffect(() => {
        getInventories().then(value=>setListItem([...value.data]))

    }, [])
    return (
        <div>
           <h2>{`${listItem[id-1]?.id}. ${listItem[id-1]?.title}`}</h2>
            <p>{`category: ${listItem[id-1]?.category}, slogan: ${listItem[id-1]?.slogan}`}</p>
            <p>{`description: ${listItem[id-1]?.description}`}</p>
        </div>
    )
}