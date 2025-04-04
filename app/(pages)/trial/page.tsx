"use client";
import ViewFooter from "@/app/components/ViewFooter";
import ViewNavbar from "@/app/components/ViewNavbar";
import { Data } from "@/app/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Trial = () => {
  const [imageUrl, setImageUrl] = useState<string>("/images/count.png");
  const [data, setData] = useState<Data>({
    user: {
      name: "",
      description: "",
      daily_salary: 0,
    },
    saving: {
      first_saving: 0,
      total_saving: 0,
      total_money_used: 0,
    },
    bill: [
      {
        ordinal_number: 0,
        total_money_spent: 0,
        description: "",
        is_increase: false,
        date_now: new Date(),
      },
    ],
    image: {
      username: "",
    },
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: true, // Whether animation should happen only once
    });
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("data");
      if (savedData) {
        setData(JSON.parse(savedData));
      } else {
        console.log("Data tidak ditemukan di localStorage.");
      }
    }
  }, []);
  useEffect(() => {
    if (data.image.username.length != 0 && isValidUrl(data.image.username)) {
      setImageUrl(data.image.username);
    }
  }, [data]);
  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  // useEffect(() => {
  //   if (data.image.username.length != 0) {
  //     getGithubProfile(data.image.username);
  //   }
  // }, [data])
  // const getGithubProfile = async (username: string) => {
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${username}`);
  //     const data = await response.json();
  //     console.log(data.avatar_url); // URL foto profil
  //     setImageUrl(data.avatar_url);
  //   } catch (error) {
  //     console.error("Error fetching GitHub profile:", error);
  //   }
  // };
  return (
    <>
      <div className="w-10/12 mx-auto relative flex flex-col gap-24">
        <ViewNavbar isLanding={false} savedData={data} setSavedData={setData} />
        <div className="m-auto mt-28 overflow-x-hidden">
          <h1
            data-aos="fade-left"
            className="bg-primary w-fit p-3 rounded font-medium text-4xl md:text-6xl"
          >
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.saving.total_saving)}
          </h1>
          <p data-aos="fade-right" className="mt-3 text-center">
            My Savings
          </p>
        </div>
        <div className="flex flex-col gap-5 overflow-hidden">
          {/* --- */}
          <div className="flex w-full gap-5 flex-col md:flex-row order-2 md:order-1 overflow-hidden">
            <Image
              data-aos="fade-right"
              src={imageUrl}
              alt="count"
              width={423}
              height={353}
              className="rounded w-full sm:w-80 h-80 object-cover"
            />
            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-left"
                className="w-full bg-primary rounded text-3xl font-semibold p-2 text-center"
              >
                Details
              </h2>
              <div
                data-aos="fade-up"
                className="h-full bg-[#121212] rounded p-3 text-center flex flex-col"
              >
                <h3 className="text-primary font-semibold mb-2">
                  Total Money I Used
                </h3>
                <p className="flex-grow flex justify-center items-center text-2xl md:text-5xl">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(data.saving.total_money_used)}
                </p>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="flex w-full gap-5 flex-col md:flex-row order-1 md:order-2 overflow-hidden">
            <div className="w-full flex flex-col gap-5">
              <h2
                data-aos="fade-left"
                className="w-full bg-primary rounded text-3xl font-semibold p-2 text-center"
              >
                {data.user.name}
              </h2>
              <div
                data-aos="fade-up"
                className="h-full bg-[#121212] rounded p-3"
              >
                <p>{data.user.description}</p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="min-h-72 bg-[#121212] rounded p-3 text-center flex flex-col w-full"
            >
              <h3 className="text-primary font-semibold mb-2">Daily Salary</h3>
              <p className="flex-grow flex justify-center items-center text-2xl md:text-5xl">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.user.daily_salary)}
              </p>
            </div>
          </div>
          {/* --- */}
          <div
            data-aos="fade-up"
            className="min-h-72 bg-[#121212] rounded p-3 text-center flex flex-col w-full order-3"
          >
            <h3 className="text-primary font-semibold mb-2">
              My First Savings
            </h3>
            <p className="flex-grow flex justify-center items-center text-2xl md:text-5xl">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.saving.first_saving)}
            </p>
          </div>
          {/* --- */}
        </div>
        <div className="relative overflow-x-auto bg-[#121212] rounded">
          <table
            data-aos="fade-down"
            className="w-full text-sm text-left rtl:text-right text-white"
          >
            <thead className="text-xs uppercase bg-primary">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Money Spent
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.bill.length == 0 && (
                <tr>
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    There is no history yet
                  </td>
                </tr>
              )}
              {typeof window !== "undefined" &&
                !localStorage.getItem("data") && (
                  <tr>
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                      Please fill your data first
                    </td>
                  </tr>
                )}
              {typeof window !== "undefined" &&
                localStorage.getItem("data") &&
                data.bill
                  .sort((a, b) => b.ordinal_number - a.ordinal_number)
                  .map((item, index) => (
                    <tr key={index} className="border-white">
                      <th scope="row" className="px-6 py-4">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                        {item.is_increase ? "+" : "-"}{" "}
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.total_money_spent)}
                      </td>
                      <td className="px-6 py-4">{item.description}</td>
                      <td className="px-6 py-4">
                        {new Date(item.date_now).toLocaleString("id-ID", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <ViewFooter />
    </>
  );
};

export default Trial;
