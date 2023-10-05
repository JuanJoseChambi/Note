import style from "./Search.module.scss"

function Search() {
  return (
    <div className={style.btnSeacrh}>
        <div className={style.searchComponent}>
            <label><i className='bx bx-search-alt'></i></label>
            <input type="text" placeholder="Buscar Notas" />
        </div>
    </div>
  )
}

export default Search