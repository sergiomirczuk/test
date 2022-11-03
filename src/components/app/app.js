import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../serch-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employes-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Niekit", salary: 800, increase: false, star: false, id: 1 },////deleteItem opeira sie na id na ktory nacisnalismy
				{ name: "Denis", salary: 3000, increase: false, star: false, id: 2 },// ustala nową data
				{ name: "Kasper", salary: 5000, increase: false, star: false, id: 3 },//data ustala sie jako data ale bez wybranego id
			]
		}
		this.maxId = 4;
	}
	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}
	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	addItem = (name, salary) => {
	 const newItem = {
		name,
		salary,
		increase: false,
		id : this.maxId++,
		star: false,
		
	 }
	 this.setState(({data}) => {
		 const newArr = [...data, newItem];
		 return {
			 data: newArr
		 }
	 })

	}
	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>
				<div className="search-panel">
					<SearchPanel />
					<AppFilter  />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
