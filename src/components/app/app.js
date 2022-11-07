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
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 4;
	}
	onUpdateSearch = (term) => {
		this.setState({term})
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
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'star':
				return items.filter(item => item.star);
			case 'moreThan1000':
				return items.filter(item => item.salary > 1000);
			default : 
			return items
		}
	}
	onFilterSelect = (filter) => {
		this.setState({filter})
	}
	render() {
		const {data, term, filter} = this.state
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter}
					onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
