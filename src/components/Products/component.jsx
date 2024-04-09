import product_img from '../../Img/product_img.svg'
import { ProductsItems } from './Products-items/component'
import './styles.css'

export const Products = () => {
return (
    <section className='products'>
        <div className="container products__container">
            <div className="products__title">What can we offer</div>
            <div className="products__column">  
                <ProductsItems 
                    name={'Argentina'}
                    title={'Product Manager'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
                <ProductsItems 
                    name={'Barbados'}
                    title={'Web Designer'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
                <ProductsItems 
                    name={'Cuba'}
                    title={'Chief Data Officer'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
                <img src={product_img} alt="" className="product__img" />
            </div>
            <div className="products__column">
                <ProductsItems 
                    name={'Brunei'}
                    title={'Office Manager'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
                <ProductsItems 
                    name={'Cyprus'}
                    title={'Account Executive'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
                <ProductsItems 
                    name={'Afghanistan'}
                    title={'Chief Product Officer'}
                    descr={'Lorem ipsum in the good ol’ days. We are just getting started.'}
                />
            </div>
            
        </div>
    </section>
)
}