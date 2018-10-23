import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Typography, withStyles, AppBar, Toolbar, Paper, Avatar, TextField, Button, Fade } from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd';
import fire from '../fire';

const styles = theme => ({
    icon: {
        backgroundColor: theme.palette.secondary.main,
        marginBottom: 8
    },
    formContainer: {
        display: 'block',
        margin: '96px auto 0 auto',
        maxWidth: '32.5rem',
        paddingTop: 32,
        paddingLeft: 48,
        paddingBottom: 24,
        paddingRight: 48,
        textAlign: 'center',
    },
    formHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center;'
    },
    form: {
        width: '100%',
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        '&:not(:last-child)': {
            marginBottom: 16
        },
        width: '100%',
    },
    loginBtn: {
        marginTop: 12,
        marginBottom: 32
    },
    createAccount: {
        textDecoration: 'none',
        display: 'inline',
        transition: 'all .2s ease-out',
        '&:hover': {
            color: theme.palette.secondary.dark
        }
    },
    error: {
        color: 'red'
    }
});
class Register extends Component {

    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        errorMsg: ''
    }

    inputChangedHandler = e => this.setState({ [e.target.name]: e.target.value });

    createAccountHandler = e => {
        e.preventDefault();
        if (this.state.email === '' || this.state.password === '' || this.state.passwordConfirm === '') {
            this.setState({ errorMsg: 'Fill in all fields' })
            setTimeout(() => this.setState({ errorMsg: '' }), 5000);
            return;
        } else if (this.state.password !== this.state.passwordConfirm) {
            this.setState({ errorMsg: 'Passwords doesn\'t match' })
            setTimeout(() => this.setState({ errorMsg: '' }), 5000);
            return;
        }

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => this.props.history.push('/home'))
            .catch(err => {
                console.log(err)
                this.setState({ errorMsg: err.message });
                setTimeout(() => this.setState({ errorMsg: '' }), 5000);
            });
    }


    render() {

        const { classes, theme } = this.props;
        console.log(this.props)

        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6">Habit Creator</Typography>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.formContainer}>
                    <header className={classes.formHeader}>
                        <Avatar className={classes.icon}>
                            <PersonAdd />
                        </Avatar>
                        <Typography variant="h4" align="center">Create account</Typography>
                    </header>
                    <form className={classes.form}>
                        <Fade in={this.state.errorMsg !== ''}>
                            <Typography variant="subtitle2" className={classes.error}>
                                {this.state.errorMsg === '' ? '\u00A0' : this.state.errorMsg}
                            </Typography>
                        </Fade>
                        <TextField
                            onChange={this.inputChangedHandler}
                            value={this.state.email}
                            type="email"
                            name="email"
                            autoFocus={true}
                            required
                            label="Email"
                            placeholder="Email"
                            variant="standard"
                            className={classes.input} />
                        <TextField
                            onChange={this.inputChangedHandler}
                            value={this.state.password}
                            type="password"
                            required
                            label="Password"
                            name="password"
                            placeholder="Password"
                            className={classes.input} />
                        <TextField
                            onChange={this.inputChangedHandler}
                            value={this.state.passwordConfirm}
                            type="password"
                            required
                            label="Confirm password"
                            name="passwordConfirm"
                            placeholder="Confirm password"
                            className={classes.input} />
                        <Button
                            color="secondary"
                            variant="contained"
                            className={classes.loginBtn}
                            onClick={this.createAccountHandler}
                            type="submit"
                        >Register</Button>
                    </form>
                    <Typography
                        variant="body2"
                        align="center"
                        className={classes.createAccount}
                        component={Link}
                        to="/login">Login instead</Typography>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Register);