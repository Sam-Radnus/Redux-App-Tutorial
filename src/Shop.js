import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
 import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
const Shop = () => {
  const dispatch=useDispatch();
  const balance=useSelector(state=>state.amount)

  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        {/* <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Add this item to the cart
        <button className="btn btn-danger mx-3" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        <button className="btn btn-primary mx-3" onClick={()=>{withdrawMoney(100)}}>-</button>
        Add this item to the cart :Balance:${balance}
        <button className="btn btn-danger mx-3" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop