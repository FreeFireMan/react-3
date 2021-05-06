export default function Post({post, search}) {
    return (
        <div>
            {post.id} -
            {post.title}

            <button onClick={()=> search(post.id)}>text</button>
        </div>
    )
}