import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { createBrowserHistory } from "history";

import classes from "./NewTask.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import NewTaskForm from "../../components/NewTask/NewTask";

let history = createBrowserHistory();

class NewTask extends Component {
  render() {
    let newTask = (
      <React.Fragment>
        <Backdrop show onClick={() => history.goBack()} />
        <div className={classes.NewTask}>
          <NewTaskForm
            onSubmitForm={(values) => this.props.onNewTask(values)}
          />
        </div>
      </React.Fragment>
    );
    return <React.Fragment>{newTask}</React.Fragment>;
  }
}

const mapDispatchToProps = (dispath) => {
  let history = createBrowserHistory();
  return {
    onNewTask: (values) => {
      dispath(
        actions.newTask(
          values.title,
          values.content,
          values.progress,
          values.deadline
        )
      );
      history.push({ pathname: "/tasks" });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewTask);
