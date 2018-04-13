import React from 'react'

// const imageURL = require(`${props.house.img}`)
function House(props) {

    return (
    <div>
      <div>

      <div className='house-list'>
      <p>{props.house.name}</p>
      <p>{props.house.address}</p>
      <p>{props.house.city}</p>
      <p>{props.house.state}</p>
      <p>{props.house.zip}</p>
      <p>{props.house.mortgage}</p>
      <button className="delete-button">Delete</button>
      </div>

      </div>
      
      {/* <img alt="house pic" src={imageURL} /> */}
      
    </div>)
  }


  export default House;

