import './styles.css'
import ProductsItem_img from '../../../Img/productsItem_img.png'

export const ProductsItems = ({name,title,descr}) => {
return(
    <>
        <div className="productsItem">
            <img src={ProductsItem_img} alt="" className="productsItem__img" />
            <div className="productsItem__text">
                <div className="productsItem__name">{name}</div>
                <div className="productsItem__title">{title}</div>
                <div className="productsItem__descr">{descr}</div>
            </div>
        </div>
    </>
)
}