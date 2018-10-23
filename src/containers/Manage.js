import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import { Button, withStyles, Typography, Paper, List } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

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
                            <Typography variant="h6" align="center">Some really long habit name for testing</Typography>
                            <div>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography variant="h6" align="center">Daily habit nr 2</Typography>
                            <div>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </Paper>
                        <Paper className={classes.habitItem}>
                            <Typography variant="h6" align="center">Daily habit nr 3</Typography>
                            <div>
                                <Button variant="fab" mini color="secondary" style={{ marginRight: 16 }}>
                                    <EditIcon />
                                </Button>
                                <Button variant="fab" mini color="primary">
                                    <DeleteIcon />
                                </Button>
                            </div>
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