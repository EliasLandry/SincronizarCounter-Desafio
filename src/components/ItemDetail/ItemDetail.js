import React from 'react'
import { useNavigate, Link} from 'react-router-dom'
import itemDetailStyle from './ItemDetail.css'
import ItemCount from '../ItemCount'
import { useState } from 'react'

const ItemDetail = ({productDetail}) => {
    const {id, title, price, pictureURL, description, stock} = productDetail;
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(-1)
    }
    
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
      setCart( [...cart, item] )
    }

    const isInCart = (id) =>{
     return cart.some(prod => prod.id === id)
    }

    const agregarAlCarrito = (count) => {
      const itemToAdd = {
        id,
        title,
        price,
        pictureURL,
        count
      }
      addItem(itemToAdd)
    }

  return (
    <div style={{width: 18+'rem'}}>
        <h1 className="card-title" style={{margin:40+'px'}}>{title}</h1>
        <div className='d-flex detailCard'> 
          <img src={pictureURL} style={{minWidth:400+'px'}} className="card-img-top" alt="..."/>
          <div className="d-flex flex-column infoContainer" >
              <p className="card-text" style={{backgroundColor:'#212529', color:'white', borderRadius:5+'px'}}>${price}</p>
              <p>{description}</p>
              <br/>
              {
                !isInCart(id)
                ? <ItemCount
                    stock={stock} 
                    initial={1} 
                    onAdd={agregarAlCarrito}
                    setCount={setCount}
                    count={count}
                  />
                : <Link to='/cart' className="btn btn-success my-3">Terminar mi compra</Link>
              }
              <hr/>
              <button  className="getBack-btn" onClick={handleNavigate} type="button">Volver</button>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail