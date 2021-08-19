import { useState } from "react";
import "../styles/global.scss";  // Como o global foi importado no app todos os estilos dentro do mesmo serão reaproveitados em outras partes do código

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContext } from "../contexts/PlayerContext";

import styles from "../styles/app.module.scss"

/**
 * O Header e o player como estão em todas as telas elas vão diretamente no App
 * O Component recebe o resto do conteúdo que atualmente vem do index.tsx
*/
function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true)
  };

  function togglePlay() {
    setIsPlaying(!isPlaying)
  };

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  };

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
      <div className={styles.wrapper}>
        <main>
          <Header /> 
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp;