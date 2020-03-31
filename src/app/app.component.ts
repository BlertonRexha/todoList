import { Component } from '@angular/core';
import { TodoListServiceService } from './todo-list-service.service';

export class Hero {
	id: number;
	name: string;
	desc: string;
}


const HEROES: Hero[] = [
]

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	heroes: Hero[] = HEROES;
	hero: Hero = {
		id: 11111111,
		name: '',
		desc: ''
	}

	constructor(private _datasfromservice: TodoListServiceService) { }

	getfromserv() {
		let ObjectFromService = this._datasfromservice.getSomeDataFromService();
		ObjectFromService.forEach(obj => {
			this.heroes.push(obj);
		});
	}
	
	additem(item) {
		let heroi: Hero = {
			id: this.hero.id,
			name: this.hero.name,
			desc: this.hero.desc
		}

		this.heroes.push(heroi);
		this.hero.name = "";
		this.hero.desc = "";
		this.hero.id = this.hero.id + 1;
	}
	public itemDetails: Hero;
	viewDetails(hero) {
		this.itemDetails = hero;
	}


	editDetails(editItem) {
		this.hero.name = editItem.name;
		this.hero.desc = editItem.desc;
	}

	removeItem(index) {
		// Animate
		document.getElementById("listanimation").classList.add("fadeOutLeft");
		var ind = this.heroes.indexOf(index);
		setTimeout(() => {this.heroes.splice(ind, 1)}, 200);
	}





}
