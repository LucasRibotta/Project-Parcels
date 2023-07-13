"use client"
import { IoChevronBackOutline } from "react-icons/io5"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { useUpdateUserMutation } from "@/redux/services/userApi"
import { useAppSession } from "@/app/hook"
export default function PasswordUpdate() {
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[1rem]">
        <div className="flex items-center gap-2">
          <Link href="/userDataRegister">
            <IoChevronBackOutline className="h-6 w-6 stroke-current" />
          </Link>
          <h3 className="text-xl font-bold leading-normal">Tu contraseña</h3>
        </div>
        <div className="bg-white mt-4 w-[60%] mb-6 shadow-xl rounded-lg p-4 space-y-8 ">
          <h4 className="text-md font-bold leading-normal">
            ¿Deseas cambiar tu contraseña?
          </h4>
          <div className="w-full">
            <div className="relative h-10 w-full  mt-[1rem]">
              <input
                type="password"
                className={
                  error
                    ? "peer h-full w-full rounded-[7px] border border-[#c54343] border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-[#c54343] focus:border-t-transparent focus:outline-0 disabled:border-0"
                    : "peer h-full w-full rounded-[7px] border  border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-[#51a8a1] focus:border-t-transparent focus:outline-0 disabled:border-0"
                }
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label
                className={
                  error
                    ? "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#c54343] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#c54343] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#c54343]"
                    : "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#51a8a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#51a8a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#51a8a1]"
                }
              >
                {error || "Contraseña"}
              </label>
            </div>
            <div className="relative h-10 w-full  mt-[1rem]">
              <input
                type="password"
                className={
                  error
                    ? "peer h-full w-full rounded-[7px] border border-[#c54343] border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#c54343] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    : "peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#51a8a1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                }
                placeholder=" "
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <label
                className={
                  error
                    ? "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#c54343] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#c54343] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#c54343]"
                    : "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#51a8a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#51a8a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#51a8a1]"
                }
              >
                {error || "Repetir contraseña"}
              </label>
            </div>
          </div>
          <button
            className="w-full bg-[#51a8a1] py-3 text-white rounded-md"
            onClick={handleSubmit}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </form>
  )
}
