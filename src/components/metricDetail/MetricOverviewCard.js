import React from 'react';
import PropTypes from 'prop-types';
import {find} from 'lodash';
import Card from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import {Colors} from '../../styles';
import Loader from '../shared/loader/Loader';
import MetricOverviewBoxPlot from './MetricOverviewBoxPlot';
import {metricReference} from '../../constants/metrics';

class MetricOverviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricTableValue: 0,
      metricTableName: 'AllYears',
      metricColumnValue: 0,
      metricColumnName: 'average',
      logScale: false,
    };
  }
  componentWillMount() {
    if (!this.props.allClassesBoxPlots) {
      return this.props.fetchAllClassesBoxPlots();
    }
  }

  componentDidMount() {
    this.setState({
      metricTableValue: 0,
      metricColumnValue: 0,
    });
  }

  _toggleLogScale() {
    this.setState({logScale: !this.state.logScale});
  }

  _handleTableChange(event, index, value) {
    this.setState(
      {
        metricTableValue: value,
        metricTableName: this._getDisplayValue(
          'displayTableName',
          event.target.innerText,
          'tableName'
        ),
      },
      () => {
        this.setState({
          metricColumnValue: 0,
          metricColumnName: Object.keys(
            this.props.allClassesBoxPlots[this.state.metricTableName]
          )[0],
        });
      }
    );
  }

  _handleColumnChange(event, index, value) {
    this.setState({
      metricColumnValue: value,
      metricColumnName: this._getDisplayValue(
        'display',
        event.target.innerText,
        'columnName'
      ),
    });
  }

  _getDisplayValue(searchKey, searchValue, key) {
    const objectFound = find(
      metricReference,
      e => e[searchKey] === searchValue
    );
    return objectFound[key];
  }

  _renderTableItems() {
    return Object.keys(this.props.allClassesBoxPlots).map((key, index) => (
      <MenuItem
        value={index}
        key={index}
        primaryText={this._getDisplayValue(
          'tableName',
          key,
          'displayTableName'
        )}
      />
    ));
  }

  _renderColumnItems() {
    return Object.keys(
      this.props.allClassesBoxPlots[this.state.metricTableName]
    ).map((key, index) => (
      <MenuItem
        value={index}
        key={index}
        primaryText={this._getDisplayValue('columnName', key, 'display')}
      />
    ));
  }

  render() {
    if (!this.props.allClassesBoxPlots) {
      return (
        <React.Fragment>
          <Loader loading={this.props.loading} />
          <Card style={{width: '65%', height: '600px', overflow: 'scroll'}} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Card
          style={{
            width: '65%',
            height: '600px',
            overflow: 'scroll',
            margin: '0 auto',
          }}
        >
          <div style={styles.selectionContainer}>
            <SelectField
              floatingLabelText="Metric Category"
              value={this.state.metricTableValue}
              onChange={(event, index, value) =>
                this._handleTableChange(event, index, value)
              }
              selectedMenuItemStyle={{color: Colors.gold}}
              floatingLabelStyle={{color: Colors.gold}}
            >
              {this._renderTableItems()}
            </SelectField>
            <SelectField
              floatingLabelText="Metric Name"
              value={this.state.metricColumnValue}
              onChange={(event, index, value) =>
                this._handleColumnChange(event, index, value)
              }
              selectedMenuItemStyle={{color: Colors.gold}}
              floatingLabelStyle={{color: Colors.gold}}
            >
              {this._renderColumnItems()}
            </SelectField>
            <Toggle
              style={{marginTop: '35px', width: '120px'}}
              label={'Log Scale'}
              labelStyle={styles.labelStyle}
              value={'empty'}
              onClick={() => this._toggleLogScale()}
              toggled={this.state.logScale}
            />
          </div>
          <MetricOverviewBoxPlot
            boxPlotData={
              this.props.allClassesBoxPlots[this.state.metricTableName][
                this.state.metricColumnName
              ]
            }
            logScale={this.state.logScale}
          />
        </Card>
        <Loader loading={this.props.loading} />
      </React.Fragment>
    );
  }
}

MetricOverviewCard.propTypes = {
  fetchAllClassesBoxPlots: PropTypes.func,
  loading: PropTypes.bool,
  allClassesBoxPlots: PropTypes.object,
};

const styles = {
  selectionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: '20px',
    marginLeft: '30px',
  },
  BLcontainer: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    width: '100px',
    padding: '20px',
    boxShadow: '2px 2px 45px -5px rgba(110,110,110,0.5)',
    zIndex: '20',
  },
  labelStyle: {
    color: Colors.grey,
    fontSize: '12px',
  },
};
export default MetricOverviewCard;
