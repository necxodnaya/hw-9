import './List.css'

function List({taskList = []}) {
    return(
        <div className='list'>
            {taskList.map(({title, date }, index) =>{
                return(
                    <div key={index}>
                        <p>{title}</p>
                        <p>{date}</p>
                    </div>
                    
                )
            })}
        </div>
    )
}
export default List;