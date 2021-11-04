import Logo from "../logo"

function Brand({title, tagline}) {
    return (
        <header>
            <Logo/>
            <h1>{title || "Brand Text"}</h1>
            <p>{tagline || "tagline goes here"}</p>
        </header>
    )
}

export default Brand