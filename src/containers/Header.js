import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Layout from '../components/shared/header/Layout';
import {isBrowserNotSupported} from '../utils/helpers';
import MetricGaugeDrawer from '../components/metricDetail/MetricGaugeDrawer';
import {fetchReleaseNotes} from '../actions/releaseNote';
import {toggleMetricGaugeDrawer} from '../actions/metricDetail';

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
  render() {
    return (
      <React.Fragment>
        <MetricGaugeDrawer
          isDrawerOpen={this.props.isDrawerOpen}
          toggleMetricGaugeDrawer={status =>
            this.props.toggleMetricGaugeDrawer(status)
          }
        />
        <Layout releaseNoteVersion={this.getVersion()} />

        <Dialog
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={() => this.handleClose()}
        >
          <div>
            {
              'Sorry, your browser may not be fully supported! We recommend Chrome v51+, Firefox v51+ or Edge v12+.'
            }
          </div>

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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReleaseNotes: () => dispatch(fetchReleaseNotes()),
    toggleMetricGaugeDrawer: status =>
      dispatch(toggleMetricGaugeDrawer(status)),
  };
};

Header.propTypes = {
  releaseNotes: PropTypes.array,
  fetchReleaseNotes: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  toggleMetricGaugeDrawer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
