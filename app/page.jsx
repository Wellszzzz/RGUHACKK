import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen p-2 bg-gradient-to-r from-rose-500 to-blue-500">
      <div className="text-white flex justify-between items-center px-6 mb-5">
        <div className="p-6 flex justify-center items-center gap-x-2 text-xl">
          <img src="./pawprint.png" alt="logo" width={40} height={40} />
          <span className="font-black">Animal Verse</span>
        </div>
        <div className="inline-flex rounded-md shadow-xs" role="group">
          <Link
            href={"/login"}
            className="px-5 py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 "
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="px-5 py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 "
          >
            Signup
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 w-[95%] min-h-[550px] mx-auto rounded-2xl grid md:grid-row-1 md:grid-cols-2 grid-cols-1 grid-row-2 overflow-hidden">
        <div className="flex flex-col justify-start md:justify-center items-start p-10 leading-normal gap-y-5">
          <h5 className="mb-2 text-4xl md:text-5xl font-black tracking-tight text-white text-center md:text-left">
            Capture. Analyze. Protect
          </h5>
          <p className="font-normal text-white text-lg md:text-xl text-center md:text-left">
            Our AI-powered platform transforms your <strong>wildlife</strong>{" "}
            observations into real-time data that helps scientist and
            conservationist track species, identify threats, and safeguard
            biodiversity
          </p>
          <Link
            href={"/animals"}
            className="bg-white text-black py-3 px-5 text-center rounded-md"
          >
            Try it now!
          </Link>
        </div>
        <div className="grid place-items-center rotate-6">
          <div
            style={{
              backgroundImage: "url('./screenshot.png')",
            }}
            className="bg-cover w-[300px] h-[500px] rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  );
}
