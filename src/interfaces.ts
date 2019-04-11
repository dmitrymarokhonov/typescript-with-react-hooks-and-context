import { Action } from "history";

/**
|--------------------------------------------------
| All interfaces
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<IEpisode>,
  favourites: Array<IEpisode>
}

export type IDispatch = React.Dispatch<IAction>

export interface IAction {
  type: string,
  payload: Array<IEpisode> | any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string

}

export interface IEpisodeProps {
  episodes: Array<IEpisode>,
  store: {state: IState, dispatch: IDispatch}
  toggleFavAction: (state: IState, dispatch: IDispatch, episode: IEpisode) => IAction,
  favourites: Array<IEpisode>  
}
