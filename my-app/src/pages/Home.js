import React from 'react'
import SupportChat from '../components/SupportChat'
import Navbar from '../components/Navbar'
import IphoneSales from '../components/DIsplay'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
<IphoneSales></IphoneSales>   
    <SupportChat></SupportChat>
    </>
  )
}
