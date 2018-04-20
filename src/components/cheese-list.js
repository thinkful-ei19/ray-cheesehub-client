import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses())
    }

    render() {
        // console.log(this.props);
        const cheeseList = this.props.cheeses.map((cheese, index) => {
            return (
                <li key={index}>{cheese}</li>
            );
        });
            return(
                <ul>
                    {cheeseList}
                </ul>
            );
    }
};

const mapStateToProps = (state) => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);