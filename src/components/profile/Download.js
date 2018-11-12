import React from 'react';
import PropTypes from 'prop-types';

import { IconMenu, FlatButton, MenuItem } from 'material-ui';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import { CSVLink } from 'react-csv';
import { Colors } from '../../styles';

class Download extends React.Component {
  getDRH() {
    return [
      ['min', ...this.props.data.DRH.min],
      ['max', ...this.props.data.DRH.max],
      ['ten', ...this.props.data.DRH.ten],
      ['twentyFive', ...this.props.data.DRH.twenty_five],
      ['fifty', ...this.props.data.DRH.fifty],
      ['seventyFive', ...this.props.data.DRH.seventy_five],
      ['ninty', ...this.props.data.DRH.ninty],
    ];
  }

  getFlowMatrix() {
    return [this.props.data.yearRanges, ...this.props.data.flowMatrix];
  }

  getFlowResult() {
    const {
      allYear,
      fall,
      spring,
      summer,
      winter,
      fallWinter,
      yearRanges,
    } = this.props.data;

    return [
      ['Year', ...yearRanges],
      ['Avg', ...allYear.average_annual_flows],
      ['Std', ...allYear.standard_deviations],
      ['SP_Tim', ...spring.timings],
      ['SP_Mag', ...spring.magnitudes],
      ['SP_Dur', ...spring.durations],
      ['SP_ROC', ...spring.rocs],
      ['DS_Tim', ...summer.timings],
      ['DS_Mag_10', ...summer.magnitudes_ten],
      ['DS_Mag_50', ...summer.magnitudes_fifty],
      ['DS_Dur_WSI', ...summer.durations_flush],
      ['DS_Dur_WS', ...summer.durations_wet],
      ['DS_No_Flow', ...summer.no_flow_counts],
      ['WSI_Tim', ...fall.timings],
      ['WSI_Mag', ...fall.magnitudes],
      ['Wet_Tim', ...fall.wet_timings],
      ['WSI_Dur', ...fall.durations],
      ['Wet_BFL_Mag', ...fallWinter.baseflows],
      ['Peak_Tim_2', ...winter.timings['two']],
      ['Peak_Dur_2', ...winter.durations['two']],
      ['Peak_Fre_2', ...winter.frequencys['two']],
      ['Peak_Mag_2', ...winter.magnitudes['two']],
      ['Peak_Tim_5', ...winter.timings['five']],
      ['Peak_Dur_5', ...winter.durations['five']],
      ['Peak_Fre_5', ...winter.frequencys['five']],
      ['Peak_Mag_5', ...winter.magnitudes['five']],
      ['Peak_Tim_10', ...winter.timings['ten']],
      ['Peak_Dur_10', ...winter.durations['ten']],
      ['Peak_Fre_10', ...winter.frequencys['ten']],
      ['Peak_Mag_10', ...winter.magnitudes['ten']],
      ['Peak_Tim_20', ...winter.timings['twenty']],
      ['Peak_Dur_20', ...winter.durations['twenty']],
      ['Peak_Fre_20', ...winter.frequencys['twenty']],
      ['Peak_Mag_20', ...winter.magnitudes['twenty']],
    ];
  }

  render() {
    return (
      <IconMenu
        style={{ margin: '44px -100px 0px 0px' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        iconButtonElement={
          <FlatButton
            label="Download"
            style={{ marginLeft: '20px', marginTop: '10px' }}
            labelStyle={{ fontSize: '12px', color: Colors.gold }}
            icon={<FileDownload color={Colors.gold} />}
          />
        }
      >
        <MenuItem>
          <CSVLink
            data={this.getFlowMatrix()}
            filename={`annual_flow_matrix.csv`}
          >
            <div
              style={{
                textDecoration: 'none',
                color: Colors.grey,
                width: '100%',
              }}
            >
              Annual Flow Matrix
            </div>
          </CSVLink>
        </MenuItem>
        <MenuItem>
          <CSVLink data={this.getDRH()} filename={`flow_DRH.csv`}>
            <div
              style={{
                textDecoration: 'none',
                color: Colors.grey,
                width: '100%',
              }}
            >
              DRH
            </div>
          </CSVLink>
        </MenuItem>
        <MenuItem>
          <CSVLink
            data={this.getFlowResult()}
            filename={`annual_flow_result.csv`}
          >
            <div
              style={{
                textDecoration: 'none',
                color: Colors.grey,
                width: '100%',
              }}
            >
              Annual Flow Result
            </div>
          </CSVLink>
        </MenuItem>
        <MenuItem
          style={{ color: 'rgb(97, 97, 97)' }}
          primaryText="Metrics Read Me"
          onClick={() =>
            window.open(
              'https://s3-us-west-1.amazonaws.com/funcflow/resources/Reference_Data.csv'
            )
          }
        />
      </IconMenu>
    );
  }
}

Download.propTypes = {
  data: PropTypes.object,
};
export default Download;
