// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#f44e03',
  }),
  button: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#007AC1',
    color: 'white',
  },
});

// Prescription List component on the My prescriptions page.
class PrescriptionList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.root} elevation={4}>
          <Typography component="p">
            <b>Name:</b> {this.props.prescriptionName}
          </Typography>
          <Typography component="p">
            <b>Prescribing doctor:</b> {this.props.prescriptionDoctor}
          </Typography>
          <Typography component="p">
            <b>Date prescribed:</b> {this.props.prescriptionDate}
          </Typography>
          <Typography component="p">
            <b>Number of tablets:</b> {this.props.prescriptionAmount}
          </Typography>
          <Typography component="p">
            <b>Directions for use:</b> {this.props.prescriptionDirections}
          </Typography>
          <Button size="small" className={classes.button}>Remove</Button>
        </Paper>
    );
  }
}

export default withStyles(styles)(PrescriptionList);