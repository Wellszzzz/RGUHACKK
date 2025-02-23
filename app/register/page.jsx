"use client";
import Link from "next/link";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function Home() {
  return (
    <>
      <ToastContainer />
      <div className="font-openSans w-screen min-h-screen p-2 flex flex-col justify-start items-center bg-gradient-to-r from-rose-500 to-blue-500">
        <div className="w-full h-full md:w-[500px] relative shadow-2xl">
          <div className="bg-white text-black flex justify-between items-center p-5 rounded-t-lg ">
            <div>
              <img src="./pawprint.png" alt="logo" width={50} height={50} />
            </div>
            <span className="text-lg">Register</span>
          </div>
          <LoginComponent />
        </div>
      </div>
    </>
  );
}

function LoginComponent() {
  return (
    <div className="flex flex-col p-3 gap-y-3 h-full w-full">
      <form className=" flex flex-col p-3 gap-y-3 h-full w-full">
        <div className="w-full p-2 text-center font-black text-3xl text-white">
          Register
        </div>
        <input
          type="text"
          className="border border-gray-200 px-3 py-4 text-white text-base rounded-lg bg-white"
          placeholder="Email"
        />
        <input
          type="password"
          className="border border-gray-200 px-3 py-4 text-white text-base rounded-lg bg-white"
          placeholder="Password"
        />
        <input
          type="password"
          className="border border-gray-200 px-3 py-4 text-white text-base rounded-lg bg-white"
          placeholder="Confirm password"
        />
        <Link className="text-white" href={"/register"}>
          Login instead
        </Link>
        <button
          onClick={() => handleSubmit(file)}
          type="button"
          className="text-white bg-gray-900 text-base py-3 font-medium rounded-lg px-5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
