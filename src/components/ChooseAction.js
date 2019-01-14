import PropTypes from 'prop-types';
import React from 'react';
import uninstallScript from '../batch_templates/uninstall.txt';
import download from '../helpers/download';

function downloadUninstall() {
  download('UninstallRTI.bat', uninstallScript);
}

function ChooseAction(props) {
  return (
    <div id="ChooseAction">
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.setChooseAction}
      >
        Generate Install Script
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={downloadUninstall}
      >
        Download Uninstall Script
      </button>
    </div>
  );
}

ChooseAction.propTypes = {
  setChooseAction: PropTypes.func.isRequired,
};

export default ChooseAction;
