import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {

  constructor() {  }

  get(){
  	return "This is a message from service"
  }
  getSomeDataFromService(){

  	return [{
		id: 11111112,
		name: 'Blert',
		desc: 'This is description for {{11111112}}'
	},{
		id: 11111113,
		name: 'bbb',
		desc: 'This is description for {{11111113}}'
	},{
		id: 11115111,
		name: 'sdda',
		desc: 'This is description for {{11115111}}'
	},{
		id: 11145111,
		name: 'asdas',
		desc: 'This is description for {{11145111}}'
	},{
		id: 11411112,
		name: 'sadsd',
		desc: 'This is description for {{11411112}}'
	},{
		id: 11211113,
		name: 'dsa',
		desc: 'This is description for {{11211113}}'
	},{
		id: 41115111,
		name: 'dsaasd',
		desc: 'This is description for {{41115111}}'
	},{
		id: 51145111,
		name: 'ewr',
		desc: 'This is description for {{51145111}}'
	}]; 
  }
}
