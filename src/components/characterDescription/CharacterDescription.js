export default function CharacterDescription({character}) {

    return (
        <div>
            <h2>{`${character.id}. ${character.name.first} ${character.name.middle} ${character.name.last}`}</h2>

        </div>
    )
}