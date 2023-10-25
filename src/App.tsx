import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import { useIfElse } from './hooks/useIfElse'

function App() {
    const [handler, setHandler] = useState(true)

const ifElse = useIfElse
const renderConditionalOne = ifElse(
    handler,
    <div>
        <img src={reactLogo} className="w-16" alt="React logo" />
    </div>,
    <div>
        <img src={viteLogo} className="w-16" alt="Vite logo" />
    </div>
)
    const renderConditionalTwo = ifElse(
        !handler,
        <div>
            <img src={reactLogo} className="w-16" alt="React logo" />
        </div>,
        <div>
            <img src={viteLogo} className="w-16" alt="Vite logo" />
        </div>
    )

    return (
        <div className='w-screen h-screen cursor-pointer flex flex-col justify-center items-center bg-gradient-to-tr to-[#2f2f60] from-[#00d4ff]'>
            <div className='transition-all m-5' onMouseEnter={() => setHandler(!handler)}>
                {renderConditionalOne}
                <div className='font-bold text-2xl text-center'>+</div>
                {renderConditionalTwo}
            </div>
            <span className='text-2xl text-slate-300'>React UseIfElse()</span>
        </div>
    )
}

export default App
