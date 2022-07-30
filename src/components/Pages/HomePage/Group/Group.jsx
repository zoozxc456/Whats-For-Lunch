import style from './Group.module.scss'

const Group = () => {

    return (
        <div>
            {/* 搜尋列，無RWD */}
            <div id={style.searchBar}>
                <input placeholder="輸入群組代碼"></input>
                <button>加入</button>
            </div>
            <div id={style.Group}>
                Group
            </div>
        </div>
    )
}

export default Group