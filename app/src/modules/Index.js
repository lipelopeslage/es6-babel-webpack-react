import Page from './Page.js';

class Index extends Page{
	constructor(id){
		super(id);
		this.target = document.querySelector('#content');
		this.html = `<p>Este é o conteúdo da tela Index</p><br><a href="#about">Ir para about</a>`;
	}
}

export default Index