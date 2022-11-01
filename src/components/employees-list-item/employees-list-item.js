import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			star: false,
		};
	}

	onIncreace = () => {
		this.setState(({ increase }) => ({
			increase: !increase,
		}));
	};
	showStar = () => {
		this.setState(({ star }) => ({
			star: !star,
		}));
	};
	render() {
		const { name, salary, onDelete } = this.props;
		const { increase, star } = this.state;
		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			classNames += " increase";
		}
		if (star) {
			classNames += " like";
		}

		return (
			<li className={classNames}>
				<span onClick={this.showStar} className="list-group-item-label">
					{name}
				</span>
				<input
					type="text"
					className="list-group-item-label"
					defaultValue={salary + "$"}
				/>
				<div className="d-flex justify-content-center aligh-item-center">
					<button
						type="button"
						className="btn-cookie btn-sm"
						onClick={this.onIncreace}
					>
						<i className="fas fa-cookie"></i>
					</button>
					<button type="button"
					 className="btn-trash btn-sm"
					 onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;
