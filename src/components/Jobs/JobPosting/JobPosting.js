import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button } from '@material-ui/core';
import JobDescription from '../JobDescription/JobDescription';
import JobSkills from '../JobSkills/JobSkills';
import JobEquipment from '../JobEquipment/JobEquipment';
import JobRelocation from '../JobRelocation/JobRelocation';
import JobPay from '../JobPay/JobPay';
import JobBrands from '../JobBrands/JobBrands';
import JobReview from '../JobReview/JobReview'; 

export class JobPosting extends Component {
    state = {
        formCounter: 0,

    }

    //changes this.state.formCounter so that the correct part of the form is rendered to the page
    changeFormCounter = (event, property) => {
        if (property === 'add') {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter + 1
            })
            console.log(this.state.formCounter)
        } else {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter - 1
            })
            console.log(this.state.formCounter)
        }
    }
    render() {
        let formToShow = <span> </span>
        if (this.state.formCounter === 0) {
            formToShow = <JobDescription />
        } else if (this.state.formCounter === 1) {
            formToShow = <JobSkills />
        } else if (this.state.formCounter === 2) {
            formToShow = <JobEquipment />
        } else if (this.state.formCounter === 3) {
            formToShow = <JobBrands />
        }else if (this.state.formCounter === 4) {
            formToShow = <JobRelocation />
        } else if (this.state.formCounter === 5) {
            formToShow = <JobPay />
        } else if (this.state.formCounter === 6) {
            formToShow = <JobReview />
        } 
        return (
            <div>

                <h1> Job Posting </h1>

                {formToShow}

                <Button outline="variant" onClick={(event) => this.changeFormCounter(event, 'subtract')}> Back </Button> 
                <Button variant="outlined" onClick={(event) => this.changeFormCounter(event, 'add')}> Next</Button>
                
            </div>
        )
    }
}

export default JobPosting
