import React from 'react'

const LoginPage = () => {
  return (
    <main className='flex flex-col justify-center items-center bg-slate-900 min-h-screen p-4'>
        <h1 className='text-2xl text-slate-50 font-semibold mb-4'>Wellcome to React Movies</h1>

        <form className='h-80 w-80 bg-slate-800 rounded-xl shadow-md p-6'>

            <div className='bg-slate-50 h-10 rounded-lg flex items-center px-4 my-6'>
                <input 
                    type="email"
                    name="email"
                    placeholder='your email' 
                    className='outline-none'/>
            </div>

            <div className='bg-slate-50 h-10 rounded-lg flex items-center px-4 my-5'>
                <input 
                    name="password"
                    type="password"
                    placeholder='your password' 
                    className='outline-none'/>
            </div>

            <button className='w-full h-9 rounded-lg font-semibold text-slate-900 bg-fuchsia-600 mt-20'>
                Login
            </button>

        </form>

    </main>
  )
}

export default LoginPage