import MenuList from "./menu-list";
import './styles.css'
export  default function({menu=[]}){
    return<div className="tree-view-container">
<MenuList list={menu}/>
    </div>
}