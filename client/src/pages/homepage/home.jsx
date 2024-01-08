import React, { useEffect, useState } from 'react'
import './App.scss'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()
    const params=useParams()
    
    useEffect( ()=>{
      const fetchproducts= async ()=>{
        const res=await fetch('http://localhost:8000/products')
        const json= await res.json()
        setProducts(json)
        }
        fetchproducts()
    },[])

    
      return (
        <>
        
        <div className='product_row' >
          {products.map((item,index)=>(
            
              <div className='cards' key={index}>
    <img src={item.image} alt="" />
    <h2>{item.name}</h2>
    <p>{item.price} man</p>
    <button onClick={()=>navigate(`/${item._id}`)}>See details</button>
              </div>
            
          ))}
          </div>
        </>
      )
}

export default Home