import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = ({products, GridList}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filterProducts = products.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
    <div className='widget widget-search'>
        <form action="" className="search-wrapper mb-3">
            <input type="text" name="search" id='search' placeholder='Search...' defaultValue={searchTerm} 
            onChange={(e)=>{setSearchTerm(e.target.value)}}/>

            <button className='icofont-search-2'></button>

        </form>
        {/* showing -search results  */}
        <div>
            {
                searchTerm && filterProducts.map((product)=>(
                    <Link key={product.id} to={`/shop/${product.id}`}>
                        <div className="d-flex gap-3 p-2">
                            <div className='pro-thumb h-25'>
                                <img src={product.img} width={70} className='flex-{grow|shrink}-0'  alt="" />

                            </div>
                            <div className='product-item'>
                                <p>
                                    <Link to={`/shop/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </p>
                                <h6>{product.price}</h6>

                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
        
    </div>
  )
}

export default Search;