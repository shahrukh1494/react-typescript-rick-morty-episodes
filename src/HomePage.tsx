import { useEffect, lazy, Suspense, useContext } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodeList = lazy<any>(() => import("./EpisodesList"));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <Suspense fallback={<div>loading ...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
