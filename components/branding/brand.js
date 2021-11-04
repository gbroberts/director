import Logo from "../logo"
import {brand} from "./styles.module.scss";

function Brand({title, tagline}) {
    return (
        <header className={brand}>
            <Logo/>
            <h1>{title || "Brand Text"}</h1>
            <p>{tagline || "tagline goes here"}</p>
        </header>
    )
}

export default Brand