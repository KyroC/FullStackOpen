
const Filter = (props) => {
    return(
        <form>
        <div>filter shown with a <input onChange={props.handleSearchChange}></input>
        </div>
      </form>
    )
}
export default Filter;