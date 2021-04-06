import React from "react";
import { connect } from "react-redux";
import { addStep, resetSteps } from "./index";

const StepCounter = (props) => {
  return (
    <div>
      You've walked {props.steps} today!
      <button onClick={props.addStep}>Add a Step</button>
      <button onClick={props.resetSteps}>Reset Steps</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { steps: state.steps };
};

const mapDispatchToProps = {
  addStep,
  resetSteps,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
