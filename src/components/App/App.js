import React from 'react';
import {Card} from '../Card/Card';
import {Navigation} from '../Navbar/Navbar';
// import ReactDOM from 'react-dom';

 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      filterData : []
    }
    this.link = 'https://spreadsheets.google.com/feeds/list/1JIuV-NlPAC93DTqVOdh50MuFSH8h0o8KnphSQ2YxTko/od6/public/values?alt=json'
    this.loadCards();
  }

  loadCards(){
    fetch(this.link).then(d=> d.json()).then(msgs=> {
      // console.log(msgs);
      const data = msgs.feed.entry.map(el=> {
        return {
          id : el.gsx$id.$t,
          img : el.gsx$img.$t,
          name : el.gsx$name.$t,
          describe : el.gsx$describe.$t,
          price : el.gsx$price.$t
        }
      });
      // console.log(data);
      this.setState({filterData : data});
      this.setState({data});
    });
  }

  searchingCards(ev){
    const value = ev.target.value.toLowerCase();
    const filterData = this.state.data.filter((msg)=> msg.name.toLowerCase().includes(value));
    this.setState({filterData});
  }

  render(){
    return (
      <div className='wrapper'>
        <div className='navigation' onChange={this.searchingCards.bind(this)}>
          <Navigation />
        </div>
        <div className='render_all_card'>
              {this.state.filterData.map((msg)=> <Card data={msg} key={msg.id} />)}
        </div>
      </div>
    );
  }

}

export default App;
