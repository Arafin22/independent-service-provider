import React, { useContext } from 'react';
import { ServieContext } from '../../App';
import Cartitem from '../Service/Cartitem/Cartitem';

const Cart = () => {
    const [cart, setCart] = useContext(ServieContext);
    console.log(cart);
    // const [service, setService]=useState([]);

  


    // useEffect( () => {
    //     fetch("data.json")
    //     .then((res) => res.json())
    //     .then((data) => setService(data));
    // },[]);
    // const items = service.filter((items)=>service._id == 1);
    // console.log(items);
    return (
        <div>
            <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6">
    {
                cart.map((item) => <Cartitem 
                key={item._id}
                item={item}
                />)
             }
      
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
    <div className="container" id="">
    <h1 className="text-center m-5">Buy Address </h1>
    <div className="row">
        <div className="col-12 shadow-lg p-3 mb-5 bg-body rounded">
          <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Name</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              
              <div className="col-12">
                <label for="inputAddress" className="form-label">Email</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="a@a.com"/>
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Phone</label>
                <input type="text" className="form-control" id="inputCity"/>
              </div>
            
              
              <div className="col-12">
                <button type="submit" className="btn-primary bg-light text-primary border-1">Payment</button>
                
              </div>
            </form>
        </div>
    </div>
     </div>
     
 </div>
     
    </div>
    </div>
    
 



            
            {/* <h1>hello cart</h1>
             <h1>{cart.length}</h1>
             {
                cart.map((item) => <Cartitem 
                key={item._id}
                item={item}
                />)
             }
             <button>buy now</button> */}
             </div>
      
    );
};

export default Cart;