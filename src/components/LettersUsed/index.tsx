import styles from "./styles.module.css"

import { Letter } from "../Letter"

export function LettersUsed() {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>
            
            <div>
                <Letter value="R" size="small" color="correct" />
                <Letter value="L" size="small" color="wrong" />
                <Letter value="M" size="small" color="wrong" />
                <Letter value="P" size="small" color="wrong" />
                <Letter value="U" size="small" color="wrong" />
                <Letter value="X" size="small" color="wrong" />
            </div>
        </div>
    )
}
