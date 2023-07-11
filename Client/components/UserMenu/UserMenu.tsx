import { Menu, Transition } from "@headlessui/react"
import { Session } from "next-auth"
import { BiSolidUserCircle } from "react-icons/bi"
import Link from "next/link"

export default function UserMenu({
  session,
  handleLogout
}: {
  session: Session | null
  handleLogout: () => void
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center">
          {session?.user?.image ? (
            <img
              src={session?.user?.image ?? "default-image-url"}
              className="h-10 w-10 rounded-full duration-200 hover:scale-110"
              alt="no found"
            />
          ) : (
            <BiSolidUserCircle className="h-12 w-12 p-1 hover:text-[#51a8a1] duration-200 text-white" />
          )}
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[9rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link href="/userDataRegister">
                  <button
                    className={`${
                      active ? "bg-[#51a8a1] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Editar perfil
                  </button>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? "bg-[#51a8a1] text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Cerrar sesion
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}