import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getRanks, setCols, setWords, setFirstList, setSecondList } from '../store/actions/ranking'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import jsonQuery from 'json-query'
import moment from 'moment'

import '../styles/Home.css'

import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'

class Home extends Component {

    state = {
        startDate: new Date('2018-02-02'),
        endDate: new Date('2018-02-02'),
        disableEndDate: true,
        //maxDate: '',
    }

    componentDidMount = () => {
        this.props.onGetRanks()
    }

    handleFirstDate = async date => {

        this.setState({ startDate: date })
        const searchDate = moment(date).format('YYYY-MM-DD')

        const query = jsonQuery(`[formattedDate=${searchDate}]`, { data: this.props.ranks })
        //console.log(query.value)
        if (query.value) {
            const listApps = jsonQuery('name', { data: query.value.keywords })
            const uniqueApps = new Set(listApps.value)
            const cols = [...uniqueApps]

            const listWords = jsonQuery('text', { data: query.value.keywords })
            const uniqueWords = new Set(listWords.value)
            const words = [...uniqueWords]

            this.props.onSetCols(cols)
            this.props.onSetWords(words)
            this.props.onFirstList(query.value.keywords)
            this.props.onSecondList([])

            this.setState({ disableEndDate: false, endDate: new Date('2018-02-02') })
        } else {
            this.props.onSetCols([])
            this.props.onSetWords([])
            this.props.onFirstList([])
            this.props.onSecondList([])
            this.setState({ disableEndDate: false, endDate: new Date('2018-02-02') })
        }

        //const maxDate = moment(date).subtract(1, 'days').toDate()
        //this.setState({ maxDate: maxDate })
    }

    handleSecondDate = date => {

        this.setState({ endDate: date })

        const searchDate = moment(date).format('YYYY-MM-DD')
        const query = jsonQuery(`[formattedDate=${searchDate}]`, { data: this.props.ranks })

        if (query.value) {
            this.setState({ listSecondRank: query.value.keywords })
            this.props.onSecondList(query.value.keywords)
        } else {
            this.props.onSecondList([])
            this.setState({ listSecondRank: [] })
        }

    }

    render() {

        return (
            <div className="main" style={{ height: "85vh" }}>
                <div className="container">
                    <div className="title-ranking">
                        Ranking de Keywords
                    </div>

                    <div className="row">
                        <div className="col-sm-4">

                            <div>Primeira Data</div>
                            <DatePicker className="date-picker"
                                selected={this.state.startDate}
                                onChange={(val) => this.handleFirstDate(val)}
                                dateFormat="dd/MM/yyyy"
                                highlightDates={this.props.rangeDates}
                            />
                        </div>
                        <div className="col-sm-4">
                            <div>Segunda Data</div>
                            <DatePicker className="date-picker"
                                selected={this.state.endDate}
                                onChange={this.handleSecondDate}
                                dateFormat="dd/MM/yyyy"
                                highlightDates={this.props.rangeDates}
                            //disabled={this.state.disableEndDate}
                            //maxDate={this.state.maxDate}
                            />
                        </div>
                    </div>

                    <table className="table">
                        <TableHead />
                        <TableBody />
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ ranks }) => {
    return {
        ranks: ranks.ranks,
        rangeDates: ranks.rangeDates,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetRanks: () => dispatch(getRanks()),
        onSetCols: cols => dispatch(setCols(cols)),
        onSetWords: words => dispatch(setWords(words)),
        onFirstList: firstList => dispatch(setFirstList(firstList)),
        onSecondList: secondList => dispatch(setSecondList(secondList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)