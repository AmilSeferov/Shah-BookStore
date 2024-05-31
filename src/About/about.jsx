import { useState } from 'react'
import './about.css'
export const About=()=>{
    const [state,setState]=useState(false)
    return<>
    <div className="about">
    <h1>About</h1>
    <div style={state?{display:'block'}:{display:'none'}}>
    <p className='a1'>Welcome to the bookstore's website</p>
    <p className='a2'>The bookstore's website was created by Amil Safarov in 2024.</p>
    <p className='a3'>This website is for purchasing books.</p>
    <p className='a4'>The bookstore website is the final project of the algorithmic course.</p>
    <p className='a5'>We are here to meet you in a world full of books!</p>
    <p className='a6'>Thanks for watching</p>
    </div>
   

    </div>
    <audio onPlay={()=>{
        if(state){
            setState(false)
        }else{
            setState(true)
        }
    }} controls src='./auido.mp3'/>

    </>
}