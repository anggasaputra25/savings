import Link from "next/link";
import ViewNavbar from "./components/ViewNavbar";
import { FaCircleRight, FaMoneyBillWave, FaBell, FaPiggyBank, FaRightToBracket, FaHardDrive } from "react-icons/fa6";
import Image from "next/image";
import ViewFooter from "./components/ViewFooter";

export default function Home() {
  return (
    <>
      <div className="w-10/12 mx-auto relative flex flex-col gap-24">
        <ViewNavbar isLanding={true} />
        <div id="home" className="flex min-h-screen items-center justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-medium">We have <span className="text-primary font-bold">solutions</span> for save your money</h1>
            <Link href="#options" className="button-primary w-fit py-2 px-3 rounded flex items-center gap-2">Get Started <FaCircleRight /></Link>
          </div>
          <Image src={'/images/count.png'} alt="count" width={423} height={353} />
        </div>
        <div id="benefits" className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-xl font-bold">Benefits when use this app</h2>
          <div className="flex gap-12">
            <div className="flex flex-col items-center w-52">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaMoneyBillWave />
              </div>
              <h3 className="font-semibold mb-1">Save</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="flex flex-col items-center w-52">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaBell />
              </div>
              <h3 className="font-semibold mb-1">Reminder</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="flex flex-col items-center w-52">
              <div className="bg-primary w-14 h-12 rounded flex justify-center items-center text-3xl mb-2">
                <FaPiggyBank />
              </div>
              <h3 className="font-semibold mb-1">Count</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <Image src={'/images/holiday.png'} alt="holiday" width={423} height={414} />
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
        <div id="options" className="flex gap-8">
          <div className="flex flex-col justify-center">
            <div className="mb-5">
              <h2 className="mb-2 font-semibold text-xl">Benefits when you sign up</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum eveniet iste sint quas quibusdam recusandae quidem tempora soluta, sunt nesciunt qui facilis nulla, modi quod esse dicta quam alias!</p>
            </div>
            <div className="flex gap-2">
              <Link href="/" className="button-primary w-fit py-2 px-3 rounded flex items-center gap-2">Sign Up <FaRightToBracket /></Link>
              <Link href="/trial" className="button-primary w-fit py-2 px-6 rounded flex items-center gap-2">Trial <FaHardDrive /></Link>
            </div>
          </div>
          <Image src={'/images/note.png'} alt="note" width={410} height={410} />
        </div>
      </div>
      <ViewFooter />
    </>
  );
}
