import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import { Button, withStyles, Typography, Paper, List } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
    root: {
        position: 'relative',
        minHeight: '100vh',
    },
    mainContainer: {
        padding: '32px 16px 0 16px'
    },
    mainTitle: {
        marginBottom: 24
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 960,
        margin: '0 auto'
    },
    habitItem: {
        padding: '8px 12px 8px 24px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:not(:last-child)': {
            marginBottom: 16
        }
    },
    habitText: {
        marginRight: 8
    },
    habitIconWrapper: {
        whiteSpace: 'nowrap'
    },
    addDialogGroup: {
        display: 'flex',
        flexDirection: 'row'
    }
});
class Manage extends Component {

    state = {
        addDialog: false,
        newHabitName: '',
        newHabitDiff: 'medium'
    }

    inputChangedHandler = e => this.setState({ [e.target.name]: e.target.value });

    addDialogOpenHandler = () => this.setState({ addDialog: true });

    handleAddDialogChange = e => this.setState({ newHabitDiff: e.target.value });

    closeDialogHandler = () => this.setState({ addDialog: false, newHabitName: '', newHabitDiff: 'medium' });


    render() {
        const { classes } = this.props;
        const { addDialog } = this.state;
        console.log(this.state)

        return (
            <div className={classes.root}>
                <Navbar navValue={2} />
                <main className={classes.mainContainer}>
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.mainTitle}>Your current daily habits</Typography>
                    <List className={classes.list}>
                        <Paper className={classes.habitItem}>
                            <Typography
                                variant="h6"
                                align="center"
                                className={classes.habitText}>Some really long habit name for testing</Typography>
                            <div className={classes.habitIconWrapper}>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography
                                variant="h6"
                                align="center"
                                className={classes.habitText}>Another really long habit name for testing</Typography>
                            <div className={classes.habitIconWrapper}>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography
                                variant="h6"
                                align="center"
                                className={classes.habitText}>Short one here</Typography>
                            <div className={classes.habitIconWrapper}>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </Paper>

                    </List>
                    <Button variant="contained" color="secondary" onClick={this.addDialogOpenHandler}>
                        Add a habit
                    </Button>
                    <Dialog
                        open={addDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Add a daily habit</DialogTitle>
                        <DialogContent>
                            <DialogContentText color="inherit">
                                Enter a habit name and select the difficulty of it below. Make sure that you want to do this habit on a daily basis.
                            </DialogContentText>
                            <DialogContentText color="secondary">
                                You'll have to do this habit daily in order to keep the streak!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="normal"
                                id="name"
                                label="Habit name"
                                name="newHabitName"
                                type="text"
                                fullWidth
                                onChange={this.inputChangedHandler}
                                value={this.state.newHabitName}
                            />
                            <RadioGroup
                                aria-label="difficulty"
                                name="difficulty"
                                className={classes.addDialogGroup}
                                value={this.state.newHabitDiff}
                                onChange={this.handleAddDialogChange}
                            >
                                <FormControlLabel
                                    value="easy"
                                    control={<Radio color="secondary" />}
                                    label="Easy"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="medium"
                                    control={<Radio color="secondary" />}
                                    label="Medium"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="hard"
                                    control={<Radio color="secondary" />}
                                    label="Hard"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeDialogHandler} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="secondary" variant="contained">
                                Add
                            </Button>
                        </DialogActions>
                    </Dialog>
                </main>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Manage);