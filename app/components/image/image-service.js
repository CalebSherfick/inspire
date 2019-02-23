// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	img: {}
}

let _subscribers = {
	img: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


export default class ImageService {

	addSubscribers(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Image() {
		return _state.img
	}

	getImage() {
		imgApi.get()
			.then(res => {
				_setState('img', res.data.large_url)
			})
	}
}
