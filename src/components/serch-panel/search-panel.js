import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onUpdate = (e) => {
        
        const termValue = e.target.value;
        this.setState({ termValue });
        this.props.onUpdateSearch(termValue)
        
    }
	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Znajdź niewolnika"
                value={this.state.termValue}
                onChange={this.onUpdate}
			/>
		);
	}
}

export default SearchPanel;
