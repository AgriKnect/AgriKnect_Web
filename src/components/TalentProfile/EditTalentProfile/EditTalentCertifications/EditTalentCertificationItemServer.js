import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';

export class EditTalentCertificationsItemServer extends Component {

    // componentDidMount(){
    //     console.log('NEW ONE FROM THE REDUX STATE', this.state.id)
    // }

    state = {
        id: this.props.item.id,
        certificate: this.props.item.certificate,
        issuingCompany: this.props.item.issuingCompany,
        issueDate: this.props.item.issueDate,
        expirationDate: this.props.item.expirationDate,
        editMode: false,
       
    }


    addCertificate = (event, property) => {

        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.state)

    }

    deleteCertificate = () => {
        console.log('delete',this.state.certificate)
        this.props.dispatch({ type: 'DELETE_EDITED_CERTIFICATE', payload: this.state})
    }

    // sendData = (event) => {
    //     this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: { state: this.state, expirationDate: event.target.value } })
    //     this.setState({
    //         ...this.state,
    //         numberOfChanges: this.state.numberOfChanges + 1
    //     })
    // }

    toggleEditMode = () => {
        console.log(this.state.id)
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    toggleEditModeSave = () => {
        // this.preventDefault(this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: this.state}))
        this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: this.state})
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    render() {
        let JSXToRender = <span> </span>
        if (this.state.editMode) {
            JSXToRender = 
            <>
           
                <div>
                
                    <TextField defaultValue={this.state.certificate} id="standard-basic" label="Standard" onChange={(event) => this.addCertificate(event, 'certificate')} />
                </div>
                    <Typography>Issuing Company: </Typography>
                    <TextField defaultValue={this.state.issuingCompany} onChange={(event) => this.addCertificate(event, 'issuingCompany')} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.issueDate).format(("YYYY-MM-DD"))}
                            label="Issue Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'issueDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.expirationDate).format(("YYYY-MM-DD"))}
                            label="Expiration Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'expirationDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                    <Button variant="outlined" onClick={this.deleteCertificate}> Delete </Button> 
                    </div> 
             </>
        } else {
            JSXToRender = 
                
               <>
                     <div>

                    <Typography> Certificate Name: {this.state.certificate}  </Typography>
                    </div>
                <Typography>Issuing Company: {this.state.issuingCompany}  </Typography>
                  

                    <div>
                    <Typography> Issue Date: {moment(this.state.issueDate).format(("YYYY-MM-DD"))}</Typography>
                    <Typography> Expiration Date: {moment(this.state.expirationDate).format(("YYYY-MM-DD"))}</Typography>
                       
                        <Button variant="outlined" onClick={this.toggleEditMode}> Edit </Button>
                    <Button variant="outlined" onClick={this.deleteCertificate}> Delete </Button> 
                    </div> 
                </>
              
        }


        const { classes } = this.props; //need this for Material UI
        return (
            <>
            {JSXToRender}
            </>
           
        )
    }
}

EditTalentCertificationsItemServer.propTypes = { classes: PropTypes.object.isRequired };


export default connect()(withStyles(styles)(EditTalentCertificationsItemServer)); 