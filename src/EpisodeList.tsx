import React from 'react';
import { IEpisode } from './interfaces';


export default function EpisodeList(props: any): Array<JSX.Element> {
  
  const { episodes, toggleFavAction, favourites, store } = props;
  const {state, dispatch} = store;  

  return episodes.map((episode: IEpisode) => {
    let updatedEpisode = { ...episode };
    const image = {
      medium: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-2241.jpg",
      original: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-2241.jpg"
    }
    if (!updatedEpisode.image) {
      updatedEpisode = { ...updatedEpisode, image }
    }
    return (
      <section key={updatedEpisode.id} className="episode-box">
        <img style={{ Width: "250px", maxHeight: "140px" }} src={updatedEpisode.image.medium} alt={`Breaking Bad ${updatedEpisode.name}`} />
        <div>{updatedEpisode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Season: {updatedEpisode.season} Number: {updatedEpisode.number}</div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favourites.find((fav: IEpisode) => fav.id === updatedEpisode.id) ? "Unfav" : "Fav"}
          </button>
        </section>
      </section>
    )
  })
}
