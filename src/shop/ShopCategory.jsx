import React from 'react';

const ShopCategory = ({ filterItem, setItems, menuItems, setProducts, selectedCategory }) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'> All Categories</h5>
      </div>
      <div>
        <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
        {
          menuItems && menuItems.length > 0 && menuItems.map((Val, id) => (
            <button
              className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`}
              key={id}
              onClick={() => filterItem(Val)}>
              {Val}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default ShopCategory;


















// import React from 'react'

// const ShopCategory = (filterItem, setItems, menuItems, setProducts, selectedCategory) => {
//   return (
//     <>
//     <div className='widget-header'>
//       <h5 className='ms-2'>


//       </h5>
//     </div>
//     <div>
//       {
//         menuItems.map((Val, id)=>{
//           return (
//             <button 
//             className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
//             key={id}
//             onClick={()=>filterItem(Val)}>
//               {Val}
//             </button>
//           )
//         })
//       }

//     </div>
    



//     </>
//   )
// }

// export default ShopCategory





























//chatgpt but All  botton are not working yet

// import React from 'react';

// const ShopCategory = ({ filterItem, setItems, menuItems, setProducts, selectedCategory }) => {
//   return (
//     <>
//       <div className='widget-header'>
//         <h5 className='ms-2'> All Categories</h5>
//       </div>
//       <div>
//         <button className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} onClick={() => filterItem("All")}>
//           All
//         </button>
//         {
//           menuItems && menuItems.length > 0 && menuItems.map((Val, id) => (
//             <button
//               className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
//               key={id}
//               onClick={() => filterItem(Val)}>
//               {Val}
//             </button>
//           ))
//         }
//       </div>
//     </>
//   );
// };

// export default ShopCategory;
