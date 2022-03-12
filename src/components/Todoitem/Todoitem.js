import React from "react";

const Todoitem =(props) =>{
    const {items,deleteItem} = props
    let length =items.length
    const ListItems = length ?(
        items.map(item => {
            return(
                <div key={item.id} className= "ListItems">
                   
                        <span className="name">{item.name}</span>
                        <span className="age">{item.age}</span>
                        <span className="action icon" onClick={() =>deleteItem(item.id)}>x</span>
    
                </div>
            )
        })
    ) : (
        <p>
            No Items to show
        </p>
    )
    return(
        <div>
            <div className="ListItems">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
           {ListItems} 

        </div>
    )
}
export default Todoitem;