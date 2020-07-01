import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileSkillsList from './TalentProfileEditSkillsList'; 
import TalentProfileEditExpertise from './TalentProfileEditExpertise';
import {Button} from '@material-ui/core'

export class TalentProfileEditSkills extends Component {
    

    state = {
        listRendered: true,
    }

    renderExpertise = () => {
        this.setState({
            listRendered: !this.state.listRendered
        })
    }

    submitExpertise = () => {
        this.props.dispatch({type:'RUN_UPDATE_SKILLS_LOGIC', payload: { skills: this.props.skills.editedSkillsExpertise, id: this.props.user.id }, history: this.props.history })
        // this.props.dispatch({ type: 'UPDATE_TALENT_SKILLS', payload: { skills: this.props.skills.editedSkillsExpertise, id: this.props.user.id }})
        // this.props.dispatch({ type: 'DELETE_ALL_SKILLS' })
        // this.props.history.push(`/talentProfile/${this.props.user.id}`);
    }


    render() {
        let JSXToRender = <span> </span>
        let buttonToRender = <button></button>
        if (this.state.listRendered) {
            JSXToRender = <TalentProfileSkillsList/>;
              buttonToRender =  <Button variant= 'outlined' onClick={this.renderExpertise}> Next </Button>;
        } else {
            JSXToRender = <TalentProfileEditExpertise/>
            buttonToRender =  <Button onClick={this.submitExpertise}> Submit </Button>;
        }
        return (
            <div>
                {JSXToRender}
                {buttonToRender}
           
            

            </div>
        )
    }
}

TalentProfileEditSkills.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        skills: reduxState.editedTalentSkillsReducer,
        user: reduxState.user
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(TalentProfileEditSkills)); 
