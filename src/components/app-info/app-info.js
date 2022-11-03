import './app-info.css';


const AppInfo = ({increased, employees}) => {
	return (
		<div className="app-info">
			<h1>Wszyscy niewolnicy: </h1>
			<h2>Ilość niewolników: {employees} </h2>
			<h2>Premie dostaną:{increased}</h2>
		</div>
	);
};

export default AppInfo;