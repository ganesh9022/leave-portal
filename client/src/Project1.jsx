import React, { useCallback, useEffect, useState } from 'react';

const Project1 = () => {
    const [length, setLength] = useState(0);
    const [char, setChar] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const generator = useCallback(() => {
        let pass = '';
        let str = 'qwe4r5t6y7u8iop[asdfghjklzxcvbnWERTYHDFVGBHNJ';
        if (numberAllowed) str += '0123456789';
        if (char) str += '!@#$%^&*';

        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIndex);
        }
        setPassword(pass);
    }, [length, char, numberAllowed, setPassword]);

    useEffect(() => {
        generator();
    }, [length, char, numberAllowed, generator]);

    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = password;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    return (
        <div>
            <div className='w-[485px] max-w-full rounded-full py-4 felx justify-center bg-gray-400 text-orange-500'>
                <div className='flex w-[305px] shadow rounded-lg ml-[60px] overflow-hidden mb-4'>
                    <input
                        type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3 read-only:'
                        placeholder='password'
                    />
                    <button
                        className='outline-none bg-blue-200 text-white px-3 py-0.5 shrink-0'
                        onClick={copyToClipboard}
                    >
                        copy
                    </button>
                </div>

                <div className='flex items-center gap-x-2 ml-9'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='range'
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label> Length:{length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={numberAllowed}
                            id='numberInput'
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label> Number</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={char}
                            id='charInput'
                            onChange={() => {
                                setChar((prev) => !prev);
                            }}
                        />
                        <label> String</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;
