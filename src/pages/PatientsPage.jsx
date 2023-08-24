import { Navbar } from "../components/Navbar"
import React, {useEffect, useState} from 'react'


const PatientsPage = () => {

  const [data, setData] = useState()

  useEffect(() => {
    const getAllPatients = async() =>{
      try{
        const response = await fetch('http://localhost:8000/api/patients')
        const patients = await response.json()
        console.log(patients)
        setData(patients)
        //Pintar Pacientes en tarjetas

      }catch(error){
        console.log("Error es: ", error)
      }
    }

    getAllPatients()

  }, [])
  
  return (
    <>
    <Navbar/>
    {data.map((patients) => (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Patient</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{patients.name}</a>
            <p className="mt-2 text-gray-500">Age: {patients.age}</p>
            <p className="mt-2 text-gray-500">Address: {patients.address}</p>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default PatientsPage