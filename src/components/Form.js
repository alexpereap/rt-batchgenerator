import PropTypes from 'prop-types';
import React from 'react';

// Version map
const versionMap = require('../version_maps/version_map.json');

const defaultVersion = `${
  Object.keys(versionMap)[Object.keys(versionMap).length - 1]
}`;
const defaultITI = versionMap[defaultVersion].ITI[0];
const defaultRTAM = versionMap[defaultVersion].RTAM[0];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      software: 'Client',
      version: defaultVersion,
      msi: 'NICE Real-Time Client.msi',
      msi64: 'NICE Real-Time Client 64.msi',
      include_iti: false,
      iti: defaultITI,
      include_rtam: false,
      rtam: defaultRTAM,
      include_hotfixes: false,
      architecture: '6432',
    };
  }

  setSoftware = e => this.setState({ software: e.target.value });

  setVersion = e => {
    const version = e.target.value;
    // re sets default ITI and RTAM values after version change
    const iti = versionMap[version].ITI[0];
    const rtam = versionMap[version].RTAM[0];

    this.setState({
      version,
      iti,
      rtam,
    });
  };

  setMsi = e => this.setState({ msi: e.target.value });

  setMsi64 = e => this.setState({ msi64: e.target.value });

  toggleITI = () => this.setState(prevState => {
    const oposite = !prevState.include_iti;
    return { include_iti: oposite };
  });

  setITI = e => this.setState({ iti: e.target.value });

  toggleRTAM = () => this.setState(prevState => {
    const oposite = !prevState.include_rtam;
    return { include_rtam: oposite };
  });

  toggleHotFixes = () => this.setState(prevState => {
    const oposite = !prevState.include_hotfixes;
    return { include_hotfixes: oposite };
  });

  setRTAM = e => this.setState({ rtam: e.target.value });

  setArchitecture = e => this.setState({ architecture: e.target.value });

  formSubmit = e => {
    e.preventDefault();

    const {
      software,
      version,
      msi,
      msi64,
      include_iti,
      iti,
      include_rtam,
      rtam,
      include_hotfixes,
      architecture,
    } = this.state;

    const batchProperties = {
      software,
      version,
      msi,
      msi64,
      include_iti,
      iti,
      include_rtam,
      rtam,
      include_hotfixes,
      architecture,
    };

    this.props.setProperties(batchProperties);
    // RenderProperties( this.state );
  };

  render() {
    return (
      <div id="formContainer">
        <form onSubmit={this.formSubmit}>
          <div className="form-group row">
            <label htmlFor="software" className="col-4 col-form-label">
              Software to install
            </label>
            <div className="col-8">
              <select
                onChange={this.setSoftware}
                required="required"
                className="custom-select"
              >
                <option defaultValue value="Client">
                  RT Client
                </option>
                <option value="Designer">RT Designer</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="softwareVersion" className="col-4 col-form-label">
              Version
            </label>
            <div className="col-8">
              <select
                value={this.state.version}
                onChange={this.setVersion}
                required="required"
                className="custom-select"
              >
                {Object.keys(versionMap).map(value => (
                  <option key={Math.random()} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Architecture Support</label>
            <div className="col-8">
              <label className="custom-control custom-radio">
                <input
                  name="architecture"
                  checked={this.state.architecture === '6432'}
                  onChange={this.setArchitecture}
                  type="radio"
                  className="custom-control-input"
                  value="6432"
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">
                  Both 64/32 bit
                </span>
              </label>
              <label className="custom-control custom-radio">
                <input
                  name="architecture"
                  checked={this.state.architecture === '64'}
                  onChange={this.setArchitecture}
                  type="radio"
                  className="custom-control-input"
                  value="64"
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">64 bit only</span>
              </label>
              <label className="custom-control custom-radio">
                <input
                  name="architecture"
                  checked={this.state.architecture === '32'}
                  onChange={this.setArchitecture}
                  type="radio"
                  className="custom-control-input"
                  value="32"
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">32 bit only</span>
              </label>
            </div>
          </div>
          {this.state.architecture === '6432' ||
          this.state.architecture === '32' ? (
            <div className="form-group row">
              <label htmlFor="msi" className="col-4 col-form-label">
                MSI file name
              </label>
              <div className="col-8">
                <input
                  id="msi"
                  required
                  value={this.state.msi}
                  onChange={this.setMsi}
                  placeholder="example: NICE Real-Time Client.msi"
                  type="text"
                  className="form-control here"
                />
              </div>
            </div>
            ) : (
              ''
            )}
          {this.state.architecture === '6432' ||
          this.state.architecture === '64' ? (
            <div className="form-group row">
              <label htmlFor="msi" className="col-4 col-form-label">
                MSI 64 bit file name
              </label>
              <div className="col-8">
                <input
                  id="msi64"
                  required
                  value={this.state.msi64}
                  onChange={this.setMsi64}
                  placeholder="example: NICE Real-Time Client 64.msi"
                  type="text"
                  className="form-control here"
                />
              </div>
            </div>
            ) : (
              ''
            )}
          <div className="form-group row">
            <label className="col-4">Include ITI Bridge</label>
            <div className="col-8 extra-component-wrapper">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.include_iti}
                  onChange={this.toggleITI}
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description" />
              </label>
              <select
                value={this.state.iti}
                required
                disabled={!this.state.include_iti}
                onChange={this.setITI}
                className="custom-select"
              >
                {versionMap[this.state.version].ITI.map(value => (
                  <option key={Math.random()} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Include RTAM</label>
            <div className="col-8 extra-component-wrapper">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.include_rtam}
                  onChange={this.toggleRTAM}
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description" />
              </label>
              <select
                value={this.state.rtam}
                required
                disabled={!this.state.include_rtam}
                onChange={this.setRTAM}
                className="custom-select"
              >
                {versionMap[this.state.version].RTAM.map(value => (
                  <option key={Math.random()} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Include Hot Fixes</label>
            <div className="col-8 extra-component-wrapper">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={this.state.include_hotfixes}
                  onChange={this.toggleHotFixes}
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description" />
              </label>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button id="setValues" type="submit" className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  setProperties: PropTypes.func,
};

Form.defaultProps = {
  setProperties: null,
};

export default Form;
