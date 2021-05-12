export default function OnePost({post}) {
    return (
        <div>
            <hr/>
            <p>post of user{post.userId}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    )
}