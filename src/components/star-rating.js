import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './star-rating.css'

const Star = ({selected = false, onClick=f=>f})=><div className={(selected)? "star selected": "star"} onClick={()=>console.log(onClick)}></div> 

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

class StarRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0,
        }
        console.log(this.props)
        this.change = this.change.bind(this)
    }
    change(starsSelected){
        console.log('he')
        this.setState({starsSelected})
    }
    clicked(){
        console.log('click me1')
    }
    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;
        console.log(starsSelected)
        console.log("totalstars", totalStars)
        console.log([Array(10)])
        console.log(typeof([Array(10)]))
        console.log([...Array(10)])

        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i} 
                          selected = {i < this.state.starsSelected} 
                          onClick={()=>this.change(i + 1)}
                    ></Star>)}
                <p>{starsSelected} of {totalStars} stars</p>
                <button onClick={this.clicked.bind(this)}>click me</button> </div>
        )
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
}
StarRating.defaultProps={
    totalStars:5
}
export default StarRating;