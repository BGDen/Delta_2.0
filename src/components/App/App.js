import React from 'react';
import {Card} from '../Card/Card';
import {Navigation} from '../Navbar/Navbar';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import {Dropdown} from 'primereact/dropdown';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';

// import ReactDOM from 'react-dom';

 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      searchData : [],

      newArr : []
      
      // brand: null
    }
    this.link = 'https://spreadsheets.google.com/feeds/list/1JIuV-NlPAC93DTqVOdh50MuFSH8h0o8KnphSQ2YxTko/od6/public/values?alt=json'
    this.loadCards();

    // this.onNameChange = this.onNameChange.bind(this);
    // this.unique = this.unique.bind(this);
    // this.filteringCards = this.filteringCards.bind(this);
  }

  loadCards(){
    fetch(this.link).then(d=> d.json()).then(msgs=> {
      console.log(msgs);
      const data = msgs.feed.entry.map(el=> {
        return {
          id : el.gsx$id.$t,
          img : el.gsx$img.$t,
          name : el.gsx$name.$t,
          describe : el.gsx$describe.$t,
          price : el.gsx$price.$t,
          tag: el.gsx$sorttag.$t
        }
      });
      console.log(data);
      // this.setState({filterData : data});
      this.setState({searchData : data});
      this.setState({data});
    });
  }

  searchingCards(ev){
    const value = ev.target.value.toLowerCase();
    const searchData = this.state.data.filter((msg)=> msg.name.toLowerCase().includes(value));
    this.setState({searchData});
  }

  filteringCards(){
    const newArr = [];
    this.data.forEach(el=> (!newArr.includes(el.name))? newArr.push(el.name): false);
    this.setState({newArr});
    console.log(newArr);
  }

    // const filterData = [...new Set(this.data.key)];
    // this.setState({filterData})
    // console.log(this.setState);
  // }

  // onNameChange(e){
  //   this.setState({brand: e.value});
  // }

  // unique(data) {
  //   let result = [];
  
  //   for (let str of data) {
  //     if (!result.includes(str)) {
  //       result.push(str);
  //     }
  //   }
  //   console.log(result);
  //   return result;
  // }

  render(){
    return (
      <div className='wrapper'>
        <div className='navigation' onChange={this.searchingCards.bind(this)}>
          <Navigation/>
        </div>

        <Dropdown options = {this.state.newArr} onChange = {this._onSelect} value = {this.state.newArr[0]} placeholder = "Выберите параметр" />
        
        {/* <div className="content-section implementation">
              <Dropdown value={this.state.brand} options={this.state.filterData} ariaLabel="Test" onChange={this.onNameChange} placeholder="Select" optionLabel="name" style={{width: '12em'}}/> */}

              {/* <Dropdown optionLabel="name" value={this.state.brand} options={this.state.filterData} onChange={(e) => {this.setState({data: e.value})}} placeholder="Select a City"/> */}

              {/* <div style={{marginTop: '.5em'}}>{this.state.filterData ? 'Selected Tag: ' + this.state.filterData.name : 'No Tag selected'}</div>
        </div> */}

        <div className='render_all_card'>
              {this.state.searchData.map((msg)=> <Card data={msg} key={msg.id} />)}
        </div>
      </div>
    );
  }

}

export default App;
