import React from "react";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

const showResult = "Showing result 01 - 12 of 139 Results";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PapularPost from "./PapularPost";
const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function-to-change-the-curnpm rent-page
  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };


  //filter-prdy=dt-based on category

  const [selectedCategory, setSelectedCategory ] = useState("All");
  const menuItems = [...new Set(Data.map((Val)=>Val.category))];

  const filterItem = (curcat)=>{
    const newItem = Data.filter((newVal)=>{
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat);
    setProducts(newItem);
  }




  return (
    <div>
      <PageHeader title="Our shop Page" curPage="sh`op" />
      {/* shop-page  */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* Layout-and-title-here */}
              <div className="shop-title d-flex flex-warp justify-content-between">
                <p>{showResult}</p>
                <div
                  className={`product-view-mode ${
                    GridList ? "gridActive" : "listActive"
                  }`}
                >
                  <a className="grid" onClick={() => setGridList(!GridList)}>
                    <i className="icofont-ghost"></i>
                  </a>
                  <a className="list" onClick={() => setGridList(!GridList)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                </div>
              </div>

              <dir>
                <ProductCard GridList={GridList} products={currentProduct} />
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </dir>

              {/* .. */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Display left-side content */}

              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory 
                filterItem = {filterItem}
                setItems = {setProducts}
                menuItems = {menuItems}
                setProducts = {setProducts}
                setSelectedCategory ={selectedCategory}

                />
                <PapularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
