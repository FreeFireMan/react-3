export default function Description({post}) {
    return (
        <div>
            <h3>{`${post.id}. ${post.title}`}</h3>
            <p>{post.body}</p>
        </div>
    );
}