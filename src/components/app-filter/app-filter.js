import './app-filter.css'

const AppFilter = ({getFilter, filter}) => {

    const buttonsData = [
        {
            name: 'all',
            label: 'Все сотрудники'
        },
        {
            name: 'rise',
            label: 'На повышение'
        },
        {
            name: 'salary',
            label: 'З/П больше 1000$'
        }
    ];

    const buttons = buttonsData.map(({name,label}) => {
        const active = filter === name;
        const classNames = active ? 'btn btn-light' : 'btn btn-outline-light'
        return(
            <button key={name} onClick={() => getFilter(name)} className={classNames} type="button">
                {label}
            </button>
        )
    })


    return ( 
        <div className="btn-group">
            {buttons}
        </div>
    );
}
 
export default AppFilter;