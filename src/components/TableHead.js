import React, { Component } from 'react';
import { connect } from 'react-redux'

class TableHead extends Component {
    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Keywords</th>
                    {
                        this.props.cols.map((item, index) => {
                            return (
                                <th scope="col" key={index}>{item}</th>
                            )
                        })
                    }

                </tr>
            </thead>
        )
    }
}

const mapStateToProps = ({ ranks }) => {
    return {
        cols: ranks.cols,
    }
}

export default connect(mapStateToProps)(TableHead)