import {useEffect, useState} from "react";
import {getInventories} from "../services/service.api";
import List from "../listOfInventory/List";

export default function Inventory({match:{url}}) {

    let[list, setList]=useState([])
    useEffect(()=>{
        getInventories()
            .then(value => setList([...value.data]))
    },[])

    return (
        <div>
            {list.map(value => <List list={value} url={url}/>)}
        </div>
    )
}