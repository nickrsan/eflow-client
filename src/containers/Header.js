import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import io from 'socket.io-client';
const socket = io(process.env.SERVER_ADDRESS);

import Layout from '../components/shared/header/Layout';
import {isBrowserNotSupported} from '../utils/helpers';
import MetricGaugeDrawer from '../components/metricDetail/MetricGaugeDrawer';
import {fetchReleaseNotes} from '../actions/releaseNote';
import {
  toggleMetricGaugeDrawer,
  toggleAnnualFlowMetrics,
  handleToggleLogScale,
} from '../actions/metricDetail';
import {fetchBroadCastMessage} from '../actions/user';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }

  componentWillMount() {
    this.props.fetchReleaseNotes();
  }

  componentDidMount() {
    isBrowserNotSupported() ? this.setState({dialogOpen: true}) : null;
    socket.on('message', msg => {
      this.props.fetchBroadCastMessage(msg);
      this.setState({dialogOpen: true});
    });
  }

  handleClose() {
    this.setState({dialogOpen: false});
  }

  getVersion() {
    if (this.props.releaseNotes) {
      return this.props.releaseNotes[0].version;
    }
    return null;
  }

  renderDialogMessage() {
    if (this.props.message) {
      return <div>{this.props.message}</div>;
    }
    return (
      <div>
        {
          'Sorry, your browser may not be fully supported! We recommend Chrome v51+, Firefox v51+ or Edge v12+.'
        }
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <MetricGaugeDrawer
          isDrawerOpen={this.props.isDrawerOpen}
          toggleMetricGaugeDrawer={status =>
            this.props.toggleMetricGaugeDrawer(status)
          }
          toggledMetrics={this.props.toggledMetrics}
          logScale={this.props.logScale}
          toggleAnnualFlowMetrics={d => this.props.toggleAnnualFlowMetrics(d)}
          handleToggleLogScale={d => this.props.handleToggleLogScale(d)}
        />
        <Layout releaseNoteVersion={this.getVersion()} />
        <Dialog
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={() => this.handleClose()}
        >
          {this.renderDialogMessage()}

          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <FlatButton
              label="Continue"
              primary={true}
              onClick={() => this.handleClose()}
            />
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    releaseNotes: state.releaseNote.releaseNotes,
    isDrawerOpen: state.metricDetail.isDrawerOpen,
    toggledMetrics: state.metricDetail.toggledMetrics,
    logScale: state.metricDetail.logScale,
    message: state.user.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReleaseNotes: () => dispatch(fetchReleaseNotes()),
    toggleMetricGaugeDrawer: status =>
      dispatch(toggleMetricGaugeDrawer(status)),
    toggleAnnualFlowMetrics: d => dispatch(toggleAnnualFlowMetrics(d)),
    handleToggleLogScale: d => dispatch(handleToggleLogScale(d)),
    fetchBroadCastMessage: d => dispatch(fetchBroadCastMessage(d)),
  };
};

Header.propTypes = {
  releaseNotes: PropTypes.array,
  message: PropTypes.string,
  fetchReleaseNotes: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  logScale: PropTypes.bool,
  toggledMetrics: PropTypes.array,
  toggleMetricGaugeDrawer: PropTypes.func,
  toggleAnnualFlowMetrics: PropTypes.func,
  handleToggleLogScale: PropTypes.func,
  fetchBroadCastMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
