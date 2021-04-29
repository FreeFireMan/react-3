export default function UserList(props) {
    let {name, age, status} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} {status.toString()}</p>

        </div>
    );
}
