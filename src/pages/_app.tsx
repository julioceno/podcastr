import "../styles/global.scss";  // Como o global foi importado no app todos os estilos dentro do mesmo serão reaproveitados em outras partes do código

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from "../styles/app.module.scss"

/**
 * O Header e o player como estão em todas as telas elas vão diretamente no App
 * O Component recebe o resto do conteúdo que atualmente vem do index.tsx
*/
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header /> 
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  )
}

export default MyApp
