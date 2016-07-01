import Page from './Page.js';

class About extends Page{
	constructor(id){
		super(id);
		this.target = document.querySelector('#content');
		this.html = `<p>Este é o conteúdo da tela About</p><br><a href="#nao">Ir para 404</a>`;
	}
}

export default About