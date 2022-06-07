import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    let el = data.map(item => {
        let {id, ...itemProps} = item
        return(
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {el}
        </ul>
    )
}

export default EmployeesList;