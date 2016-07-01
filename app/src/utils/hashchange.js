let hash = '';
let changeSymbol = Symbol();
let treatURL = () => {
	return window.location.hash.split('#').pop();
}
let hashHandler = fn => {
	fn(treatURL);
}
class HashChange {
	set change(fn) {
		this[changeSymbol] = () => {
			fn(treatURL());
		}
		window.onhashchange = this[changeSymbol];
		this[changeSymbol]();
	}
}

export default HashChange;