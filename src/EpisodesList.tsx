import { IEpisode } from "./interfaces";

const EpisodesList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        {episode.image !== null ? (
          <img
            src={episode.image.medium}
            alt={`Rick and Morty ${episode.name}`}
          />
        ) : (
          ""
        )}
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
