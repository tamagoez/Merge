import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Head>
        <title>Merge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:pl-2 lg:w-3/4">
          <h1 className="text-5xl font-bold">Merge</h1>
          <p className="py-6">Webapp to concentrate with your community or yourself.<br />Chat, Calender, Task(Todo), Vote, daialy and so on!</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary-content">or Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
