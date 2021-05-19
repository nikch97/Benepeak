import * as Models from './model-typings'

export type UserContextState = {
  error: any | null,
  fetching: Boolean,
  current: Models.CurrentUser | null,
  data:any | null,

}
