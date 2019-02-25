import ImageService from "./image-service.js";

const _is = new ImageService()


function _draw() {
  let img = _is.Image
  document.body.style.backgroundImage = `url(${img})`
}

export default class ImageController {
  constructor() {
    _is.addSubscribers('img', _draw)
    _is.getImage()
  }

}

