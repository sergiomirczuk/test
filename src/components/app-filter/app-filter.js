import "./app-filter.css";

const AppFilter = (props) => {
	const buttonData = [
		{ name: "all", label: "Wszyscy niewolnicy" },
		{ name: "star", label: "Na podwyszkę" },
		{ name: "moreThan1000", label: "Mają tyle ryżu by się nażreć" },
	];
	const buttons = buttonData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		);
	});
	return (
		<div className="button-group">
			{buttons}
		
		</div>
	);
};

export default AppFilter;
