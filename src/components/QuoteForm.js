import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newValue = event.target.value;
        let longueur = newValue.length;

        if(longueur <= MAX_LENGTH)
            this.setState({ character: newValue });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form
                className="QuoteForm"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="character">Character:</label>
                <input
                    id="character"
                    name="character"
                    type="text"
                    className={this.state.character.length < MAX_LENGTH? 'length-ok' : 'length-maximum-reached'}
                    value={this.state.character}
                    onChange={this.handleChange}
                />
                <p>{MAX_LENGTH - this.state.character.length} caractères restants.</p>
                <>You typed: <strong>{this.state.character}</strong></>
            </form>
        );
    }
}

export default QuoteForm;