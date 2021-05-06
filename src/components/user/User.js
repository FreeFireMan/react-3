export default function User ({item, find}) {
    return (
        <div>
            {item.id} -
            {item.name}-
            <button onClick={()=>find(item.id)}>Description</button>
        </div>
    )
}