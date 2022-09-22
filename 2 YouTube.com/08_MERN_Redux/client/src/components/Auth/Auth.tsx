import React from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Input from "./Input";

const Auth = (): JSX.Element => {
  const classes = useStyles();

  const [isSignup, setIsSignup] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  //* V1
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  //* v2
  //* const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              )}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? (
                    <p style={{ margin: 0 }}>
                      Already have an account? <span style={{ color: "maroon", fontWeight: "bold" }}>Sign In</span>
                    </p>
                  ) : (
                    <p style={{ margin: 0 }}>
                      Don't have an account? <span style={{ color: "maroon", fontWeight: "bold" }}>Sign Up</span>
                    </p>
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Auth;
