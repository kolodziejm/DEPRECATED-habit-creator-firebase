import React, { Component } from 'react'
import { connect } from 'react-redux';

import database from '../utils/database';

import Navbar from '../components/Navbar';
import { Button, withStyles, Typography, Paper, List, Snackbar, } from '@material-ui/core';
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
        margin: '0 auto',
        marginBottom: 32
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
        flexDirection: 'row',
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
class Manage extends Component {

    state = {
        addDialog: false,
        addDialogSnackbar: false,
        deleteDialog: false,
        newHabitName: '',
        newHabitDiff: 'medium',
        selectedHabitName: '',
        selectedHabitId: '',
        selectedHabitDiff: ''
    }

    inputChangedHandler = e => this.setState({ [e.target.name]: e.target.value });

    addDialogOpenHandler = () => this.setState({ addDialog: true });

    deleteDialogOpenHandler = (id, name) => {
        this.setState({ deleteDialog: true, selectedHabitName: name, selectedHabitId: id });
    }

    handleAddDialogRadio = e => this.setState({ newHabitDiff: e.target.value });

    closeDialogHandler = () => this.setState({ addDialog: false, deleteDialog: false, newHabitName: '', newHabitDiff: 'medium' });

    closeSnackbarHandler = () => this.setState({ addDialogSnackbar: false })


    createNewHabit = (e) => {
        e.preventDefault();
        if (this.state.newHabitName === '') {
            // dodac error handling
            return;
        }

        const dbRef = database.ref(`users/${this.props.uid}/habits`);
        dbRef.push({ name: this.state.newHabitName, difficulty: this.state.newHabitDiff, finished: false }) // FINISH
        this.setState({ addDialog: false, newHabitName: '', newHabitDiff: 'medium', addDialogSnackbar: true });
    }


    render() {
        const { classes } = this.props;
        const { addDialog, deleteDialog } = this.state;

        const habitItems = this.props.habits.map(habit => {
            return (
                <Paper className={classes.habitItem} key={habit.id}>
                    <Typography
                        variant="h6"
                        align="center"
                        className={classes.habitText}>{habit.name}</Typography>
                    <div className={classes.habitIconWrapper}>
                        <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                            <EditIcon />
                        </Button>
                        <Button variant="fab" mini color="primary" onClick={this.deleteDialogOpenHandler}>
                            <DeleteIcon />
                        </Button>
                    </div>
                </Paper>);
        })

        return (
            <div className={classes.root}>
                <Navbar navValue={2} />
                <main className={classes.mainContainer}>
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.mainTitle}>Your current daily habits</Typography>
                    <List className={classes.list}>
                        {habitItems}
                    </List>
                    <div className={classes.btnContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.addDialogOpenHandler}
                            className={classes.centeredBtn}
                        >
                            Add a habit
                    </Button>
                    </div>
                    <Dialog
                        open={addDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Add a daily habit</DialogTitle>
                        <DialogContent>
                            <DialogContentText color="inherit">
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
                                onChange={this.handleAddDialogRadio}
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
                            <Button onClick={this.createNewHabit} color="secondary" variant="contained">
                                Add
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        open={this.state.addDialogSnackbar}
                        autoHideDuration={6000}
                        onClose={this.closeSnackbarHandler}
                        message={<span>Item successfully added</span>}
                    />
                    <Dialog
                        open={deleteDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Delete a habit</DialogTitle>
                        <DialogContent>
                            <DialogContentText color="inherit">
                                Are you sure that you want to delete this habit?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeDialogHandler} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="secondary" variant="contained">
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </main>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uid: state.auth.uid,
        habits: state.habits.habits
    }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Manage));