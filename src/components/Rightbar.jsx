import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>RIGHT</Container>;
};

export default Rightbar;
