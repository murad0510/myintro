import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUserLarge,faBasketShopping,faBagShopping} from '@fortawesome/free-solid-svg-icons'

import { getImageUrl } from "../../Utils.js";
import { products } from "../../Data.js";

const productss=products;

function Item({product}){
  var date=new Date();
  var date2 = new Date(product.expireDate);
  if(date2.getDate()>=date.getDate() && date2.getFullYear()>=date.getFullYear() && date2.getMonth()>=date.getMonth()){
     return <img style={{marginTop:"15%",width:"90%"}} src={product.description}></img>;
  }
     
  return <div>
     <img style={{marginTop:"15%",width:"90%"}} src={product.description}></img>
     <img style={{width:"100%",marginTop:"-45%",marginLeft:"-35%"}} src={getImageUrl()}></img>
  </div> 
}

const listItems = productss.map((product) => (
  <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center"}}>
     <div style={{width:"40%",height:"80vh",backgroundColor:"#ff6d39",marginTop:"4%",display:"inline-block",borderRadius:"0 440px 440px 0"}}>
       <Item product={product}></Item>
     </div>

      <div id={product.id} style={{width:"30%",height:"80vh",display:'inline-block',marginTop:"4%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                   <h1 style={{paddingLeft:"30%",color:"#ff6d39"}}>Airmex</h1>
                </div>
                <div style={{width:"50%"}}>
                  <ul style={{listStyle:"none",width:"65%",height:"40%",marginTop:"7%",display:"flex",justifyContent:"space-around"}}>
                    <li style={{marginTop:"9%"}}><FontAwesomeIcon style={{width:"100%",color:"white"}} icon={faMagnifyingGlass}></FontAwesomeIcon></li>
                    <li style={{marginTop:"9%"}}><FontAwesomeIcon style={{width:"100%",color:"white"}} icon={faUserLarge}></FontAwesomeIcon></li>
                    <li style={{marginTop:"9%"}}><FontAwesomeIcon style={{width:"100%",color:"white"}} icon={faBasketShopping}></FontAwesomeIcon></li>
                  </ul>
                </div>
            </div>
          
            <div style={{width:"100%"}}>
              <h1 className='font' style={{fontSize:"27px",marginTop:"15%",color:"white",display:"block",textAlign:'left',paddingLeft:"4%"}}>{product.collectionType} Collection</h1>
          
              <h1 className='font' style={{marginTop:"3%",color:"white",display:"block",textAlign:'left',paddingLeft:"4%"}}>{product.gender} {product.color} {product.shoeType}</h1>
          
              <div style={{display:"flex"}}>
                <h2 style={{width:"18%",color:"white"}}>${product.price}</h2>
                <h2 style={{width:"17%",color:"White"}}>${product.discount}</h2>
              </div>
          
              <div style={{display:"flex",justifyContent:"space-around",marginTop:"2%"}}>
                <button style={{width:"30%",backgroundColor:"transparent",border:"0",display:"flex"}}>
                 <FontAwesomeIcon style={{color:"white",margin:"auto"}} icon={faBagShopping}></FontAwesomeIcon>
                  <h4 style={{width:"100%",color:"white"}}>Buy Now</h4>
                </button>
                <button style={{width:"30%",backgroundColor:"transparent",border:"0",display:"flex"}}>
                 <FontAwesomeIcon style={{color:"white",margin:"auto"}} icon={faBasketShopping}></FontAwesomeIcon>
                     <h4 style={{width:"100%",color:"white"}}>Add To Cart</h4>
                </button>
              </div>
            </div>
       </div>
  </div>
));

export default function Main() {
  return (
    <div>    
        {listItems}
    </div>
  )
}