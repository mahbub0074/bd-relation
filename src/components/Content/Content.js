import React, { useState } from 'react';
import users from '../../fakeData/users';
import './Content.css'
import Users from '../Users/Users';
import Summery from '../Summery/Summery';



const Content = () => {
    const alldata = users;
    const [data, setData] = useState(alldata)
    const [friend,setFriend] = useState([]);
    const [block, setBlock] = useState([]);
    const [income, setIncome] = useState([])
  
    
    function searchFriends(user){
        const index = friend.indexOf(user)
        if (index > -1) {
        return true;
        }
        else {
        return false;
        }
    }
    function searchBlock(user){
        const index = block.indexOf(user)
        if (index > -1) {
        return true;
        }
        else {
        return false;
        }
    }
    
    
  
    // console.log(users);
    const handleAddUser = (user)=>{
        if(searchFriends(user) === true){
            alert("Already in friend list")
        }
        else if(searchBlock(user) === true){
            alert("Already in block list")
        }else{
            const newFriend = [...friend,user];
        setFriend(newFriend);
        let newIncome = []
        newFriend.map ((friend) => newIncome.push(parseInt(friend.annual_income)));
        let allIncome = 0;
        newIncome.map ((income) => allIncome + income);
        setIncome(allIncome);
        }        
    }

    const handleBlockUser = (user) => {
        if(searchFriends(user) === true) {
            alert("User is in Friend list")
        } else if (searchBlock(user) === true) {
            alert("Already in block list"); 
        } else {
            const newBlock = [...block, user];
            setBlock(newBlock);  
        } 
    }
    return (
        <div className="content-container">
            <div className="user-container">
                {/* <h3>{data.length}</h3> */}

                {
                    data.map(user => <Users user={user} handleAddUser={handleAddUser} handleBlockUser={handleBlockUser}></Users>)
                }

            </div>
            <div className="summery-container">
               <Summery  users = {users} friend ={friend} block = {block} income ={income}></Summery>
            </div>

        </div>
    );
};


export default Content;