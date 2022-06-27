import React from 'react';

class SearchBar extends React.Component {
    state = { text: '' };

    onInputChange(event) {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label for='search'>Image Search</label>
                        <input id='search' type='text' onChange={ this.onInputChange } />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar