export default function Comment({item, showComment}) {
    return (
        <div>
            {item.id} -
            {item.name}
            <button onClick={() => showComment(item.id)}>comment</button>
        </div>
    )
}