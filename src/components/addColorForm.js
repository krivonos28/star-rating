import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const { _title, _color } = this.refs;
        e.preventDefault();
        if (this.props.fun) {
            this.props.fun(_title.value, _color.value)
        }
        console.log(_title.value, _color.value)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();

    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title"
                    type="text"
                    placeholder="color title..." required />
                <input ref="_color"
                    type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}


AddColorForm.propTypes = {
    fun :  PropTypes.func,
}

export default AddColorForm;