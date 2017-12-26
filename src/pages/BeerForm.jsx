import React, { Component } from 'react';
import './../css/App.css';
import './../css/reset.css';
import SingleNav from './../components/SingleNav';
import 'font-awesome/css/font-awesome.min.css';

class BeerForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name : props.name,
      type : props.type,
      brewry: props.brewry,
      description: props.description

    };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(change){
    const name = change.target.name;
    const value = change.target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    console.log('BeerForm loaded');
    return (

      <div className="beerForm">
        <p>This is the Beerform. It will display the detail information for each beer and allow for add & edit. </p>
        <form onSubmit= {this.props.beer}>
        <div className="form-typeFinder">
          <input type="text" name="Name" placeHolder="Name"value={this.state.name} />
          <input type="text" name="Brewery" placeHolder="Brewery"value={this.state.brewery} />
          <input type="text" name="Description" placeHolder="Description"value={this.state.description} />
        {/*<input type="text" name="Name" placeHolder=""value={this.state.} /> */}
          <input type="submit" value="Submit"/>
          </div>
        </form>


        {/* will be replaced with input / display fields
        <br />
        <p>Name  </p><br />
        <p>Brewery </p><br />
        <p>Description </p><br />
        <p>some text  </p><br />
        <p>some text  </p><br />

        <div className="container">
          <SingleNav name="prev" />
          <SingleNav name="edit" />
          <SingleNav name="delete" />
          <SingleNav name="next" />
        </div>
                */}
      </div>


    );
  }
}

export default BeerForm;