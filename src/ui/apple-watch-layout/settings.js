export const icon = {
  margin: 30,
  size: 130,
}

const isBrowser = typeof document !== 'undefined'

const width = isBrowser && document.body.clientWidth
export const device = {
  width: width + 20,
  height: 500,
}
