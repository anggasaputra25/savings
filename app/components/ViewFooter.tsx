import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa6";
const ViewFooter = () => {
  return (
    <footer className="mt-24 bg-black flex justify-between items-center py-5 px-12">
      <p>© 2025 Savings</p>
      <div className="flex gap-2">
        <Link href="https://www.instagram.com/anggasaputra.07" target="_blank" className="w-fit text-xl"><FaInstagram /></Link>
        <Link href="https://github.com/anggasaputra25" target="_blank" className="w-fit text-xl"><FaGithub /></Link>
      </div>
    </footer>
  )
}

export default ViewFooter