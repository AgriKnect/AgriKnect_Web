import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Card, CardContent, CardHeader } from '@material-ui/core';

export class Bio extends Component {

    state = {
        bio: ''
    }

    // componentWillUnmount() {
       
    // }
    addBio = (event) => {
         this.props.dispatch({ type: 'SET_BIO', payload: event.target.value })
        // this.setState({
        //     bio: event.target.value
        // })
        // console.log(event.target.value)
    }
    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Please include a short bio" />

                <CardContent  >
                

              
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Bio"
                        multiline
                        fullWidth
                        rows={6}
                    value={this.props.talentForm.bio} 
                        
                    onChange={(event) => this.addBio(event)}
                        variant="outlined"
                    />

              </CardContent>
              </Card>
        
        )
    }
}

Bio.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        talentForm: reduxState.talentForm.formData,

    }
}

export default connect(reduxStateToProps)(withStyles(styles)(Bio)); 