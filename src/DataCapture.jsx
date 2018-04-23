import React, { Component } from 'react';
export class DataCapture extends Component {

  constructor(props) {

    super(props);

    this.state = {

      value: '',

      name: '',

      fruit: 'coconut'

    };



    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {

    this.setState({

      value: event.target.value

    });

  }



  handleSelect = (event) => {

    this.setState({

      fruit: event.target.value

    });

  }



  handleName = (event) => {

    this.setState({

      name: event.target.value

    });

  }



  handleSubmit(event) {

    // alert('Hello, ' + this.state.name);

    this.handleFile(event);

    event.preventDefault();

  }



  handleFile(event) {

   event.preventDefault();

   alert(

     `Selected file - ${this.fileInput.files[0].name}, ${this.fileInput.files[0].size}bytes`

   );

 }



  render(){

    return(

      <div>

        <form onSubmit={this.handleSubmit}>

          <label>

            Name:

            <input type="text" value={this.state.name} onChange={this.handleName} />

          </label> <br /><br />

          <label>

            Essay:

            <textarea value={this.state.value} onChange={this.handleChange} />

          </label> <br /><br />

          <input type="submit" value="Submit" /><br /><br />

          <label>

          Pick your favorite La Croix flavor:

          <select value={this.state.fruit} onChange={this.handleSelect}>

            <option value="grapefruit">Grapefruit</option>

            <option value="lime">Lime</option>

            <option value="coconut">Coconut</option>

            <option value="mango">Mango</option>

          </select>

        </label> <br />



        <label>

          Upload file:

          <input

            type="file"

            ref={input => {

              this.fileInput = input;

            }}

          />

        </label>

        </form>



        <p>{this.state.name}</p>

      </div>

    )

  }

}
