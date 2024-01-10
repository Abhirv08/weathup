"use client";
import { generateRandomCode } from '@/constants';
import React, { useState } from 'react'

const Backend = () => {
    const [code, setCode] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [message, setMessage] = useState("checking");

    const checkCode = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/codes/use", {
            method: "POST",
            body: JSON.stringify({
                codeStr: inputCode
            })
        });

        const data = await res.json();

        if (data.error) {
            setMessage(data.error);
        } else {
            setMessage(data.message);
        }
        console.log(data)
    }

    const generateCode = async (e) => {
        const res = await fetch('/api/codes');
        const data = await res.json();

        setCode(data.code);
    }

    return (
        <div className='p-10'>
            <div className='flex gap-8 items-center mb-5'>
                <p className='w-[230px]'>Code: {code}</p>
                <button className='rounded p-1 px-4 bg-[#0d6efd] text-white' onClick={generateCode}>Refresh</button>
            </div>
            <form onSubmit={checkCode}>
                <input className='border-2 border-gray-400 rounded focus:outline-none p-2' type='text' value={inputCode} placeholder='Enter Code' onChange={(e) => setInputCode(e.target.value)} />
                <button type='submit' className='rounded p-2.5 px-8 bg-[#20c997] text-white ml-6' >Submit</button>
            </form>
            <div className='mt-2'>{message}</div>
        </div>
    )
}

export default Backend;