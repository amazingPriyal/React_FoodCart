import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import "./style.css";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {DLT} from '../redux/actions/action';

const CardDetails =() => {
  const [data,setDatas] = useState([]);
  console.log(data);
  const {id} = useParams();
  console.log(id)
  const getData = useSelector(state => state.cartreducer.carts)
  const compare = ()=>{
    let comparedata = getData.filter((e)=>{
      return e.id == id
    });
    setDatas(comparedata)
  }
  useEffect(()=>{
    compare();
  },[id])

  const history = useNavigate();

  const dispatch = useDispatch();
  const dlt = (id) =>{
    dispatch(DLT(id));
    history("/");
}


    return (
        <div>
        <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>
              {
                return (             
                <div>
            <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {ele.rname} </p>
                    <p> <strong>Price</strong>  : ₹ {ele.rname}</p>
                    <p> <strong>Dishes</strong>  : {ele.address}</p>
                    <p> <strong>Total</strong>  :₹ </p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}}>-</span>
                    <span style={{fontSize:22}}></span>
                    <span style={{fontSize:24}}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	{ele.rating}</span></p>
                    <p><strong>Order Review :</strong> <span > {ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(ele.id)}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                </div>
            
            )})
          }
          </div>
        </section>
      </div>
        </div>
    )
}

export default CardDetails;
