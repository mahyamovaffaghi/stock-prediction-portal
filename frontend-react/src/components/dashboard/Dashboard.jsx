import React , {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'
const Dashboard = () => {
    useEffect(()=>{
        const fetchProtectData = async()=>{
            try{
                const res = await axiosInstance.get("/protected-view/")
                console.log('Success:' , res.data)
            }catch(error){
                console.log('Error fetching data:' , error)
            }
        }
        fetchProtectData();
    } , [])
  return (
    <div>dashboard</div>
  )
}

export default Dashboard