import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote }) {
    return (
        <figure className="QuoteCard">
            <img
                src={quote.image}
                alt={quote.character}
            />
            <figcaption>
                <blockquote>
                    {quote.character}
                </blockquote>
                <p>
                    <cite>{quote.quote}</cite>
                    {/* <span className={this.state.favorite ? 'is-favorite' : ""} onClick={event => {
                        const newFavorite = !this.state.favorite;
                        this.setState({ favorite: newFavorite });
                    }}>&#9733;</span> */}
                </p>
            </figcaption>
        </figure>
    );
}

export default QuoteCard;