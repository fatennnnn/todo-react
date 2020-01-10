import "./Todo.css"

import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
    super(props)
    this.state=({input:"" ,
               liste:[
                //    {   title:"",
                //        isComplete:false}
               ]})
                       }
    onchange=(e)=>{this.setState({input:e.target.value})}
     add=()=>{
        // this.setState(state => {
        //   const liste = [...state.liste, state.input];
        //   return {
        //     liste
        //   }
        // })
        this.setState({liste:[...this.state.liste,{title:this.state.input,isComplete:false}],
        input:""})


      }

    
    //  
    //      this.setState(list :[...this.state.liste,this.state.input])
    //              
    //  
    // onRemoveItem = i => {
    //     this.setState(state => {
    //       const liste = state.liste.filter((item, j) => i !== j);
    //       return {
    //         liste,
    //       };
    //     });
    //   };
    
    update =(key)=>{
        this.setState({
            liste:this.state.liste.map((el,index)=>
            (index===key)?{...el,isComplete:!el.isComplete}:el

        )})
    }
    delete=(key)=>{
        this.setState({
            liste:this.state.liste.filter((el,index)=>index!==key)
        })
    }
    render() {
        return (
            <div>
                <div className="blu">
            <div className="right">
                <h1> To-DO App!</h1>
                <h5> Add New To-Do</h5>
            </div>
            {/* <RightR eventFunction={this} */}
            <div className="right-r">
                <input className="block" placeholder="entrer new task" value={this.state.input} onChange={this.onchange}/>
                <button className="btn-right" onClick={this.add} type="button">Add</button>



            </div>
        </div>

        <p class="grey">Let's get some work done! </p>
<div>
{this.state.liste.map((el,i)=>(
    <div className="listaa">
        <div className="buttn">
    <button  onClick={()=>this.update(i)} type="button">{el.isComplete?"undo":"complete"}</button>
    <button  onClick={()=>this.delete(i)} type="button">Delete</button>
    </div>
<h4 style={{textDecoration:el.isComplete?"line-through":"none"}}>{el.title}</h4>
    </div>

))}
</div>
            </div>
        )
    }
}



