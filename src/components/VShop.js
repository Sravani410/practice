import React from "react";
// import { useState } from 'react'
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { buyLaptop, buyMobile, fetchUsers } from "./Redux/action/index";
import "./Shop.css";
const VShop = (props) => {
  // normally users will be there in the mapStateToProps but we want to take that users from react-redux hook.
  //useSelector:In the useSelector we have to take the current state-->in that here users will take the normal (users) along with the  reducer (users)

  let users = useSelector((state) => state.users.users);
  let numOfLaptops = useSelector((state) => state.laptops.numOfLaptops);
  let numOfMobiles = useSelector((state) => state.mobiles.numOfMobiles);
  return (
    <div>
      <h1 className="title">VShop</h1>
      <div className="items">
        <div className="item">
          <p>Laptops</p>
          <p>Available:{numOfLaptops}</p>
          <button onClick={props.buyLaptop}>BUY</button>
        </div>
        <div className="item">
          <p>Mobiles</p>
          <p>Available:{numOfMobiles}</p>
          <button onClick={props.buyMobile}>BUY</button>
        </div>
        <div className="item">
          <p>User Count</p>
          <p>Count:{users.length}</p>
          <button onClick={props.fetchUsers}>BUY</button>
        </div>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   // console.log(state.numOfLaptops)
//   return {
//     numOfLaptops: state.laptops.numOfLaptops,
//     numOfMobiles: state.mobiles.numOfMobiles,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyLaptop,
      buyMobile,
      fetchUsers,
    },
    dispatch
  );
};
export default connect(null,mapDispatchToProps)(VShop);
