import React from 'react';
import Form from './Form';
import Properties from './Properties';

// const test = 'ho';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_form: true,
      batchProperties: {

      },
    };
  }

  setbatchProperties = batchProperties => {
    this.setState({ batchProperties });
    this.setState({ show_form: false });
  }

  render() {
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
