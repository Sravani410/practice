import React from 'react'
// import { useState } from 'react'
import { connect } from 'react-redux';
import {buyLaptop,buyMobile,fetchUsers} from "./Redux/action/index"
import "./Shop.css"
const  Shop=(props)=> {
    // console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ",props?.numOfLaptops)
    // console.log("hashgdagshg:",props)
    // const [state,setState]=useState({
    //     numOfLaptops:100
    // })
   
    // const buyLaptops=()=>{
    //    let value= state.numOfLaptops-1 
    //    setState({numOfLaptops:value})
    // }
  return (
    <div>
        <h1 className='title'>VShop</h1>
        <div className='items'>
           <div className='item'>
                <p>Laptops</p>
                <p>Available:{props.numOfLaptops}</p>
                <button onClick={props.buyLaptop}>BUY</button>
            </div>
            <div className='item'>
                <p>Mobiles</p>
                <p>Available:{props.numOfMobiles}</p>
                <button onClick={props.buyMobile}>BUY</button>
            </div>
             <div className='item'>
                <p>User Count</p>
                <p>Count:{props.users.length}</p>
                <button onClick={props.fetchUsers}>BUY</button>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    // console.log(state.numOfLaptops)
  return{
     numOfLaptops: state.laptops.numOfLaptops,
     numOfMobiles: state.mobiles.numOfMobiles,
     users:state.users.users
  }
}
const mapDispatchToProps=(dispatch)=>{
   return{
     buyLaptop:()=>dispatch(buyLaptop()),
     buyMobile:()=>dispatch(buyMobile()),
     fetchUsers:()=>dispatch(fetchUsers())
   }  
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)