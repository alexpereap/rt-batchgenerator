import React from 'react';
import Form from './Form';
import Properties from './Properties';
import ChooseAction from './ChooseAction';

// const test = 'ho';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_form: false,
      show_choose_action: true,
      batchProperties: {},
    };
  }

  setbatchProperties = batchProperties => {
    this.setState({ batchProperties });
    this.setState({ show_form: false });
  };

  shoWChooseAction = () => {
    this.setState({ show_choose_action: false });
    this.setState({ show_form: true });
  };

  render() {
    if (this.state.show_choose_action === true) {
      return <ChooseAction setChooseAction={this.shoWChooseAction} />;
    }
    if (this.state.show_form === true) {
      return <Form setProperties={this.setbatchProperties} />;
    }
    return (
      <Properties
        version="6.7"
        software={this.state.batchProperties.software}
        include_iti={this.state.batchProperties.include_iti}
        include_rtam={this.state.batchProperties.include_rtam}
        architecture={this.state.batchProperties.architecture}
        msi={this.state.batchProperties.msi}
        msi64={this.state.batchProperties.msi64}
        iti={this.state.batchProperties.iti}
        rtam={this.state.batchProperties.rtam}
        include_hotfixes={this.state.batchProperties.include_hotfixes}
      />
    );
  }
}

export default App;
