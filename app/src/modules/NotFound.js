import Page from './Page.js';

class NotFound extends Page{
	constructor(id){
		super(id);
		this.target = document.querySelector('#content');
		this.html = `<p>Página não encontrada</p><br><a href="#">Ir para Página Inicial</a>`;
	}
}

export default NotFound