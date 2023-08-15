import { useState } from "react"


export default function Todo() {
  const [ input, setInput ] = useState("")
  const [add, setAdd] = useState([])

  const addItem = ()=>{
    if(!input){
        alert("Enter your wish")
    }else{
        setAdd([...add,input])
    setInput("")
    }
    
  }

  const deletebtn = (id)=>{
    console.log(id)
    const update = add.filter((elem,ind)=>{
        return !(ind === id);
        
    })
    setAdd(update)
  }

  const AllRemove = ()=>{
    setAdd([]);
  }

    return(
        <>
         <div className="main">
            <div className="child">
                <figure>
                    <img src="https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'100px'} height={'100px'} alt="logo" />
                    <figcaption>Add your List here</figcaption>
                </figure>
                <div className="addItem">
                    <input type="text" 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    placeholder="Add items...." />
                    <button onClick={addItem}>Add</button>
                </div>

                <div className="show">
                    {add.map((val, ind)=>{
                        return(
                            <div className="eachItem" style={{display:'flex'}} key={ind} >
                        <h3>{val}</h3>
                        <button style={{height:"20px",marginTop:"24px", marginLeft:"30px"}} 
                        onClick={()=> deletebtn(ind)}
                        >delete</button>
                    </div>
                        )
                    })}
                    
                </div>
                <div className="show">
                    <button className="" data-sm-link-text="Remove All" onClick={AllRemove}><span>check List</span></button>
                </div>
            </div>
         </div>
        </>
    )
};
