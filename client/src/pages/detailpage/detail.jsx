import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    const fetchdetails = async () => {
        const res = await fetch(`http://localhost:8000/products/${id}`)
        const json = await res.json()
        setDetail(json)
    }
    useEffect(() => {
        fetchdetails()
    }, [])
    return (
        <>
            {/* {detail && detail.map((item,index)=>(
            
           
          
        ))} */}
            {detail ? <>
                <div className='cards'>
                    <img src={detail.image} alt="" />
                    <h2>{detail.name}</h2>
                    <p>{detail.price} man</p>

                </div></> : ''}
        </>
    )
}

export default Detail