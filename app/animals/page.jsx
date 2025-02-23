"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function Home() {
  useEffect(() => {
    const notification =
      "Exciting news! A rare Sturnus has been spotted in your area. Time to track it down and document your find!";
    const notify = () =>
      toast(notification, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    setTimeout(() => {
      notify();
    }, 20000);
  }, []);

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <ToastContainer />
      <div className="font-openSans w-screen min-h-screen p-2 flex flex-col justify-start items-center bg-gradient-to-r from-rose-500 to-blue-500">
        <div className="w-full h-full md:w-[500px] relative shadow-2xl">
          <div className="bg-white text-black flex justify-between items-center p-5 rounded-t-lg ">
            <Link href="/" className="cursor-pointer">
              <img src="./pawprint.png" alt="logo" width={50} height={50} />
            </Link>
            <span className="text-lg">Account</span>
          </div>
          {tabIndex === 1 ? <Objectives /> : null}
          {tabIndex === 2 ? <UserInput /> : null}
          {tabIndex === 3 ? <LocationRequest /> : null}
        </div>
        <BottomNavBar tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </div>
    </>
  );
}

function Objectives() {
  const [currentObjective, setCurrentObjective] = useState(null);

  const objectives = [
    {
      title: "Daily Quests",
      description: "Spot and log three different mammals before sunset.",
    },
    {
      title: "Species-Specific Targets",
      description: "Locate and photograph a fox within the next hour.",
    },
    {
      title: "Weekend Expeditions",
      description:
        "Track and document the presence of five different bird species over the weekend.",
    },
  ];
  return (
    <>
      <div className="flex flex-col p-3 gap-y-3 bg-sky-500 h-full w-full">
        <div className="w-full p-2 text-center font-black text-2xl flex justify-between items-center">
          {currentObjective && (
            <button onClick={() => setCurrentObjective(null)}>
              <img
                className="rotate-180"
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/more-than.png"
                alt="more-than"
              />
            </button>
          )}
          <span>Objectives</span>
        </div>
        {currentObjective ? (
          <ObjectiveSubComponent apiData={{ ...currentObjective }} />
        ) : (
          objectives.map((objective, idx) => (
            <div
              onClick={() => setCurrentObjective({ ...objective })}
              key={idx}
              className="flex items-center p-3 rounded-lg shadow-sm flex-row w-full hover:bg-gray-100 bg-gray-800"
            >
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/external-wanicon-two-tone-wanicon/64/external-target-business-model-canvas-wanicon-two-tone-wanicon.png"
                alt="external-target-business-model-canvas-wanicon-two-tone-wanicon"
              />
              <div className="flex flex-col justify-between leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {objective.title}
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  {objective.description}
                </p>
              </div>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/more-than.png"
                alt="more-than"
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

function ObjectiveSubComponent(objective) {
  if (!objective) return <></>;
  return (
    <>
      <div className="flex items-center rounded-lg shadow-sm flex-row w-full hover:bg-gray-100 bg-gray-800">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold center tracking-tight text-white">
            {objective.apiData.title}
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            {objective.apiData.description}
          </p>
          <p className="mb-3 font-normal text-center text-white">Progress</p>
          <div
            className="flex w-full h-10 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={Math.trunc(Math.random() * 100)}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="w-full flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-base text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500">
              100%
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 text-center font-black text-xl">
        Log for today
      </div>
      <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
        <div className="grid gap-1">
          <svg
            className="mx-auto"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="File">
              <path
                id="icon"
                d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z"
                fill="#4F46E5"
              />
            </g>
          </svg>
          <h2 className="text-center text-gray-400   text-xs leading-4">
            PNG, JPG or PDF, smaller than 2MB
          </h2>
        </div>
        <div className="grid gap-2">
          <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
            Drag and Drop your file here or
          </h4>
          <div className="flex items-center justify-center">
            <label>
              <input type="file" hidden />
              <div className="flex w-28 h-9 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                Choose File
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

function BottomNavBar({ tabIndex, setTabIndex }) {
  return (
    <div className="md:w-[500px] w-full flex p-2 justify-around items-center overflow-hidden mx-auto shadow-lg fixed bottom-2 text-black">
      <div className="inline-flex rounded-md shadow-xs" role="group">
        <button
          onClick={() => setTabIndex(1)}
          type="button"
          className="px-5 py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 "
        >
          Home
        </button>
        <button
          onClick={() => setTabIndex(2)}
          type="button"
          className="px-5 py-4 text-sm font-medium text-black bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 "
        >
          Upload
        </button>
        <button
          onClick={() => setTabIndex(3)}
          type="button"
          className="px-5 py-4 text-sm font-medium text-black bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 "
        >
          Hub
        </button>
      </div>
    </div>
  );
}

function UserInput() {
  const [file, setFile] = useState(null);
  const [animalName, setAnimalName] = useState("");
  const [apiData, setApiData] = useState(null);
  const dialogRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (file) => {
    if (dateRef) {
      dateRef.current.value = "";
    }
    if (locationRef) {
      locationRef.current.value = "";
    }
    if (file) {
      try {
        const reader = new FileReader();

        reader.onloadend = async function () {
          const base64String = reader.result.split(",")[1]; // Extract base64 without metadata prefix
          const response = await fetch("/api/getSimilarProducts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ base64String }),
          });

          const result = await response.json();
          const output = result.data.responses[0].labelAnnotations;

          let max = 0;
          let maxIndex = 0;

          output.forEach((value, idx) => {
            if (max < value.topicality) {
              max = value.topicality;
              maxIndex = idx;
            }
          });

          const name = output[maxIndex].description;
          setAnimalName((prev) => {
            fetchAnimalDescription(name);
            return name;
          });
          showDialog();
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.log("Error uploading image:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  const fetchAnimalDescription = async (animalName) => {
    const apiKey = "pZiGxpolJyChNfzL8u82rw==IsxlGQ6C1c8DCBNa";
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=${
          animalName ? animalName : "cheetah"
        }`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApiData(data);
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const showDialog = () => {
    if (dialogRef) dialogRef.current.showModal();
  };

  const hideDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="bg-white p-3 rounded-lg shadow-lg h-fit w-full md:w-[500px]"
      >
        <div className="flex justify-between gap-x-10 w-[90%] mx-auto items-center p-2">
          <h1 className="text-lg font-bold">
            {!animalName ? "Loading..." : animalName}
          </h1>
          <button className="" onClick={hideDialog}>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/737373/delete-sign.png"
              alt="delete-sign"
            />
          </button>
        </div>
        {apiData ? (
          <>
            <div className="flex items-center border border-gray-200 rounded-lg shadow-sm flex-row w-full bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {apiData[0]?.name}
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  {apiData[0]?.taxonomy?.scientific_name}
                </p>
                <p className="mb-3 font-normal text-gray-400">
                  {apiData[0]?.characteristics?.habitat}
                </p>
                <p className="mb-3 font-normal text-gray-400">
                  {apiData[0]?.characteristics?.top_speed}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Loading
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Loading...
              </p>
            </div>
          </div>
        )}
      </dialog>
      <form className=" flex flex-col p-3 gap-y-3 bg-sky-500 h-full w-full">
        <div className="w-full p-2 text-center font-black text-2xl">
          Animals Log
        </div>
        <input
          ref={locationRef}
          type="text"
          className="bg-gray-100 border border-gray-300 px-3 py-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Location"
        />
        <input
          ref={dateRef}
          type="text"
          className="bg-gray-100 border border-gray-300 px-3 py-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Date(dd/mm/year)"
        />
        <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
          <div className="grid gap-1">
            <svg
              className="mx-auto"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="File">
                <path
                  id="icon"
                  d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z"
                  fill="#4F46E5"
                />
              </g>
            </svg>
            <h2 className="text-center text-gray-400   text-xs leading-4">
              PNG, JPG or PDF, smaller than 2MB
            </h2>
          </div>
          <div className="grid gap-2">
            <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
              Drag and Drop your file here or
            </h4>
            <div className="flex items-center justify-center">
              <label>
                <input type="file" hidden onChange={handleImageUpload} />
                <div className="flex w-28 h-9 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleSubmit(file)}
          type="button"
          className="text-white text-base bg-gradient-to-br py-3 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}

const LocationRequest = () => {
  const [location, setLocation] = useState({
    latitude: "57.149651",
    longitude: "-2.099075",
  });
  const [animalLocationData, setAnimalLocationData] = useState([]);

  const [error, setError] = useState(null);

  const requestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const Loc = { latitude, longitude };
          setLocation(Loc);
          getAnimalsByLocation(Loc, setAnimalLocationData);
          setError(null);
        },
        (error) => {
          console.error(`Error occurred: ${error.message}`);
          setError(error.message);

          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              setError("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("An unknown error occurred.");
              setError("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    requestUserLocation();
  }, []);

  const getColor = (count) => {
    console.log(count);
    if (count > 10) {
      return "#16C47F"; // Common
    } else if (count > 5) {
      return "#FFB200"; // Rare
    } else {
      return "#D91656"; // Something else
    }
  };

  const getState = (count) => {
    if (count > 10) {
      return "Common"; // Common
    } else if (count > 5) {
      return "Occational"; // Rare
    } else {
      return "Rare"; // Something else
    }
  };

  return (
    <div className="p-2 flex justify-center items-center flex-col">
      <div className="w-full p-2 text-center font-black text-2xl">
        Animals around you
      </div>
      {animalLocationData.length === 0 ? (
        <div>Loading....</div>
      ) : (
        animalLocationData.map((animal, idx) => (
          <div
            key={idx}
            className="flex items-center overflow-hidden mb-1 rounded-lg shadow-sm flex-row w-full bg-gray-800 text-white"
          >
            <div
              className="bg-cover h-[11rem] w-[20rem]"
              style={{
                backgroundImage: `url("${animal.image}")`,
              }}
            ></div>
            <div className="flex flex-col justify-between px-3 py-1 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {animal.name}
              </h5>
              <p className="mb-2 font-normal text-gray-400">{animal.country}</p>
              <div className="w-full flex justify-between items-center font-normal text-black">
                <div
                  className="py-1 px-3 rounded-md text-gray-200"
                  style={{
                    backgroundColor: getColor(animal.count),
                  }}
                >
                  {getState(animal.count)}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

async function getAnimalsByLocation(
  { latitude, longitude },
  setAnimalLocationData
) {
  let lat = latitude;
  let lon = longitude;
  let radius = 0.1; // Approx. 11 km (Adjustable)

  if (!lat || !lon) {
    alert("Please enter valid latitude and longitude");
    return;
  }

  // Define bounding box (simulated radius search)
  let minLat = lat - radius;
  let maxLat = lat + radius;
  let minLon = lon - radius;
  let maxLon = lon + radius;

  let url = `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${minLat},${maxLat}&decimalLongitude=${minLon},${maxLon}&limit=2000`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const map = new Map();
    const output = [];
    const data = await response.json();

    data.results.forEach((value) => {
      const key = `${value.genericName}`;

      if (!map.has(key)) {
        const obj = {
          count: 1, // Set initial count to 1
          name: value.genericName,
          image: value.media[0].identifier,
          country: value.country,
        };
        map.set(key, obj);
        output.push(obj);
      } else {
        const item = map.get(key);
        item.count += 1; // Increment count directly in the item
      }
    });

    setAnimalLocationData(output);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
