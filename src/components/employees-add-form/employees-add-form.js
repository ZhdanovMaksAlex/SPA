import './employees-add-form.css';
import { Component } from 'react/cjs/react.development';



class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            salary: 0
        }
    }

    onValueChang = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


   render() {
       let{name,salary} = this.state
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    value={name}
                    name="name"
                        onChange={this.onValueChang}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChang} />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
   }
}

export default EmployeesAddForm;