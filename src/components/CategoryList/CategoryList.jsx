import "./CategoryList.css";
function CategoryList(){
    return(
        <ul className="UlList">
            <li className="LiList">
                <a className="LinkList" href="/#">
                Contacto
                </a>
            </li>
            <li className="LiList">
                <a className="LinkList" href="/#">
                Acerca de Nosotros
                </a>
            </li>

            <li className="LiList">
                <a className="LinkList" href="/#">
                Productos
                </a>
            </li>

            <li className="LiList">
                <a className="LinkList" href="/#">
                Ofertas
                </a>
            </li> 
            
        </ul>
    )
};

export default CategoryList;