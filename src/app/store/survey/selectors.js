import { storeName } from "./types"

export const getYes = (state) => {
  return getStore(state).yes
}

export const getNo = (state) => {
  return getStore(state).no
}

export const getTotal = (state) => {
  const store = getStore(state)
  return store.yes + store.no
}

const getStore = (state) => state[storeName]
