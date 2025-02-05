'use client'
import Link from "next/link";
import { FaCircleRight, FaMoneyBillWave, FaBell, FaPiggyBank, FaRightToBracket, FaHardDrive } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { Data } from "../types/types";
import ViewNavbar from "./ViewNavbar";
import ViewFooter from "./ViewFooter";

export default function ViewHome() {
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
        }
      ],
      image: {
        username: ""
      }
    });
  return (
    <>
      <div className="w-10/12 mx-auto relative flex flex-col gap-24">
        <ViewNavbar isLanding={true} savedData={data} setSavedData={setData} />
        <div id="home" className="flex min-h-screen items-center justify-center flex-col md:flex-row md:justify-between gap-3">
          <div className="flex flex-col gap-5 order-2 items-center md:order-1 md:items-start">
            <h1 className="font-medium text-xl text-center md:text-5xl md:text-left">We have <span className="text-primary font-bold">solutions</span> for save your money</h1>
            <Link href="#options" className="button-primary w-fit py-2 px-3 rounded flex items-center gap-2">Get Started <FaCircleRight /></Link>
          </div>
          <Image src={'/images/count.png'} alt="count" width={423} height={353} className="w-[323px] h-[253px] order-1 md:w-[423px] md:h-[353px] md:order-2" />
        </div>
        <div id="benefits" className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-xl font-bold">Benefits when use this app</h2>
          <div className="flex gap-12 snap-x snap-mandatory overflow-x-scroll w-full md:overflow-hidden md:w-auto">
            <div className="flex flex-col items-center min-w-full md:min-w-52 md:w-52 snap-center">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaMoneyBillWave />
              </div>
              <h3 className="font-semibold mb-1">Save</h3>
              <p>save the amount of money you have</p>
            </div>
            <div className="flex flex-col items-center min-w-full md:min-w-52 md:w-52 snap-center">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaBell />
              </div>
              <h3 className="font-semibold mb-1">Reminder</h3>
              <p>Remind yourself of the amount of money you have</p>
            </div>
            <div className="flex flex-col items-center min-w-full md:min-w-52 md:w-52 snap-center">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaPiggyBank />
              </div>
              <h3 className="font-semibold mb-1">Count</h3>
              <p>Calculate the amount of money you have</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <Image src={'/images/holiday.png'} alt="holiday" width={423} height={414} className="w-[323px] h-[314px] md:w-[423px] md:h-[414px]" />
          <div className="flex flex-col justify-center">
            <div className="mb-7">
              <h2 className="mb-2 font-semibold text-xl">Why you should keep financial records</h2>
              <p>By maintaining accurate records of your income, expenses, and savings, you can track where your money is going, identify spending patterns, and make informed decisions about budgeting, investing, or cutting unnecessary costs. This helps you stay on top of your financial health, avoid unnecessary debt, and achieve your financial goals more efficiently.</p>
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-xl">Why you should save your money</h2>
              <p>You should save your money because it provides financial security and freedom. Having savings ensures that you are prepared for emergencies, unexpected expenses, or future goals like buying a house, starting a business, or retirement. It also reduces financial stress and gives you more options in life, allowing you to take advantage of opportunities without relying on debt.</p>
            </div>
          </div>
        </div>
        <div id="options" className="flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="mb-5">
              <h2 className="mb-2 font-semibold text-xl">Let&apos;s start with a demo</h2>
              <p>with a demo, you can see how the system works for free! In the demo, We implement a local storage system so your data will be safe because the data will be stored on the device you use!</p>
            </div>
            <div className="flex gap-2">
              <Link href="/sign-up" className="button-primary w-fit py-2 px-3 rounded flex items-center gap-2">Sign Up <FaRightToBracket /></Link>
              <Link href="/trial" className="button-primary w-fit py-2 px-6 rounded flex items-center gap-2">Demo <FaHardDrive /></Link>
            </div>
          </div>
          <Image src={'/images/note.png'} alt="note" width={410} height={410} className="order-1 w-[310px] h-[310px] md:order-2 md:w-[410px] md:h-[410px]" />
        </div>
      </div>
      <ViewFooter />
    </>
  );
}