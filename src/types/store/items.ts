export interface IItems {
  items: []
  loading: boolean
  error: string
}

export interface ItemsActions {}

export enum Items {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}
