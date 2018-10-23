import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import { Button, withStyles, Typography, Paper, List } from '@material-ui/core';

const styles = theme => ({
    root: {
        position: 'relative',
        minHeight: '100vh',
    },
    mainContainer: {
        padding: '20px 15px 0 15px'
    },
    mainTitle: {
        marginBottom: 16
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
        padding: '12px 12px 12px 36px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '&:not(:last-child)': {
            marginBottom: 8
        }
    }
});
class Manage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Navbar navValue={2} />
                <main className={classes.mainContainer}>
                    <Typography variant="h4" align="center" className={classes.mainTitle}>Your current daily habits</Typography>
                    <List className={classes.list}>
                        <Paper className={classes.habitItem}>
                            <Typography variant="h6">Daily habit nr 1</Typography>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography variant="h6">Daily habit nr 2</Typography>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography variant="h6">Daily habit nr 3</Typography>
                        </Paper>
                    </List>
                    <Button variant="contained" color="secondary">
                        Add a habit
                    </Button>
                </main>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Manage);