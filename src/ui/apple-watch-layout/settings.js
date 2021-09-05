import { isDocument } from '../../utils/isBrowser'

export const icon = {
  margin: 30,
  size: 130,
}

const width = isDocument() && document.body.clientWidth
export const device = {
  width: width + 20,
  height: 500,
}
