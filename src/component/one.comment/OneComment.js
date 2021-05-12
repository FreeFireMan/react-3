export default function OneComment({comment}) {
    return (
        <div>
            <hr/>
            <p>comment to post{comment.postId}</p>
            <p>{comment.body}</p>
            <p>{`${comment.name}. ${comment.email}`}</p>
            <hr/>
        </div>
    )
}