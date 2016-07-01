import React from 'react';
import ReactDOM from 'react-dom';

let idSymbol = Symbol();
let htmlSymbol = Symbol();
let contentSymbol = Symbol();
let buildModule = (id, content, target)=>{
	ReactDOM.render(<Component id={id} content={content}/>, target);
}

class Page {
	constructor(id){
		this[idSymbol] = id;
	}

	get id(){return this[idSymbol];}
	set target(value){this[contentSymbol] = value;}
	set html(value){this[htmlSymbol] = buildModule(this.id, value, this[contentSymbol]);}

	getLocation(){
		return 'location: '+window.location.href;
	}
}

class Component extends React.Component{
	render(){
		return <div className="module-holder" id={this.props.id}>
			<h1 className="page-header">Teste com react em <em>{this.props.id}</em></h1><br/><br/>
			<div className="well" dangerouslySetInnerHTML={{__html:this.props.content}}></div>
			<h3>Features do Ecmascript 2015<br/>utilizadas nesse exemplo:</h3>
			<ul>
				<li><a href="http://es6-features.org/#ExpressionBodies" target="_blank">Arrow functions</a></li>
				<li><a href="http://es6-features.org/#SymbolType" target="_blank">Symbols</a></li>
				<li><a href="http://es6-features.org/#ValueExportImport" target="_blank">Importação/Exportação de módulos</a></li>
				<li><a href="http://es6-features.org/#ClassDefinition" target="_blank">Classes</a></li>
				<li><a href="http://es6-features.org/#StringInterpolation" target="_blank">Interpolação de strings</a></li>
			</ul>
		</div>;
	}
}

export default Page;