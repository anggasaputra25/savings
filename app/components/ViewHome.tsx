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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="flex flex-col items-center min-w-full md:min-w-52 md:w-52 snap-center">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaBell />
              </div>
              <h3 className="font-semibold mb-1">Reminder</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="flex flex-col items-center min-w-full md:min-w-52 md:w-52 snap-center">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaPiggyBank />
              </div>
              <h3 className="font-semibold mb-1">Count</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <Image src={'/images/holiday.png'} alt="holiday" width={423} height={414} className="w-[323px] h-[314px] md:w-[423px] md:h-[414px]" />
          <div className="flex flex-col justify-center">
            <div className="mb-7">
              <h2 className="mb-2 font-semibold text-xl">Why you should save your money</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum eveniet iste sint quas quibusdam recusandae quidem tempora soluta, sunt nesciunt qui facilis nulla, modi quod esse dicta quam alias!</p>
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-xl">Why you should save your money</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum eveniet iste sint quas quibusdam recusandae quidem tempora soluta, sunt nesciunt qui facilis nulla, modi quod esse dicta quam alias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ut fugiat quisquam facilis distinctio, quibusdam perferendis natus velit odio similique doloribus aperiam fugit ea a sapiente. Labore architecto esse beatae.</p>
            </div>
          </div>
        </div>
        <div id="options" className="flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="mb-5">
              <h2 className="mb-2 font-semibold text-xl">Benefits when you sign up</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum eveniet iste sint quas quibusdam recusandae quidem tempora soluta, sunt nesciunt qui facilis nulla, modi quod esse dicta quam alias!</p>
            </div>
            <div className="flex gap-2">
              <Link href="/sign-up" className="button-primary w-fit py-2 px-3 rounded flex items-center gap-2">Sign Up <FaRightToBracket /></Link>
              <Link href="/trial" className="button-primary w-fit py-2 px-6 rounded flex items-center gap-2">Trial <FaHardDrive /></Link>
            </div>
          </div>
          <Image src={'/images/note.png'} alt="note" width={410} height={410} className="order-1 w-[310px] h-[310px] md:order-2 md:w-[410px] md:h-[410px]" />
        </div>
      </div>
      <ViewFooter />
    </>
  );
}