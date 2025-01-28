import Image from "next/image"
import Link from "next/link"

const signUp = () => {
  return(
    <div className="h-screen flex justify-center items-center p-8 flex-col gap-3 md:flex-row md:gap-20">
      <div className="w-full flex justify-end">
        <Image src={'/images/connectivity.png'} width={450} height={450} alt="connectivity" className="w-full md:w-[450px]" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-medium text-2xl w-full md:text-4xl md:w-10/12">Oops! This page is under maintenance....</h1>
        <Link href={'/'} className="button-primary py-2 px-4 rounded w-fit">Back to Homepage</Link>
      </div>
    </div>
  )
}

export default signUp