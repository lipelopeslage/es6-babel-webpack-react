import Index from './modules/Index.js';
import About from './modules/About.js';
import NotFound from './modules/NotFound.js';
import HashChange from './utils/hashchange.js';

var page;// = new Index('home');
var hash = new HashChange();
hash.change = h => {
	switch(h){
		case '':
			page = new Index('home');
		break;
		case 'home':
			page = new Index('home');
		break;
		case 'about':
			page = new About('about');
		break;
		default:
			page = new NotFound('404');
	}
}


/*
https://babeljs.io/blog/2015/06/07/react-on-es6-plus
https://leanpub.com/setting-up-es6/read#sec_webpack-babel
http://guybedford.com/practical-workflows-for-es6-modules
http://es6-features.org/#StaticMembers
https://facebook.github.io/react/docs/reusable-components.html

*/