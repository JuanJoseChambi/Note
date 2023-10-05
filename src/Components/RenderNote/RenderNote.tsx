import ContainerNote from "../ContainerNote/ContainerNote";
import Search from "../Search/Search";
import style from "./RenderNote.module.scss";

function RenderNote() {
  return (
    <div className={style.renderNoteComponent}>
        <Search/>
        <ContainerNote/>
    </div>
  )
}

export default RenderNote