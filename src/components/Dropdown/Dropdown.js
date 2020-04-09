import React from 'react';
import {Dropdown} from 'primereact/dropdown';

export class DropdownDemo extends Component {
  constructor(){
    super();
    this.state = {
      name1: null,
      name2: null,
      name3: 'hello'
    };
    this.onNameChange = this.onNameChange.bind(this);
  }
}
