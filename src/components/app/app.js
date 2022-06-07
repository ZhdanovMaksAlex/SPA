import { Component } from 'react/cjs/react.production.min';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Ivan A.C', salary: 100, increase: false, id: 1},
        {name: 'Pety S.M', salary: 200, increase: true, id: 2},
        {name: 'Maks A.T', salary: 300, increase: false, id: 3},
      ],
      term: ''
    }
  }

deleteItem = (id) => {
  this.setState(({data}) => {

    return {
      data: data.filter(item => item.id !== id)
    }
  })
}

seaarcEmp = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => {
        return item.name.indexof(term) > -1
    })
}


 render() {
  let {data, term} = this.state
  let visibData = this.seaarcEmp(data, term);
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data = {visibData}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm/>
    </div>
  );
 }
}

export default App;
