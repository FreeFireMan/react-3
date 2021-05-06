export default function Description ({user}) {
    return (
        <div>
            <h4>{user.id}{user.name}</h4>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
};