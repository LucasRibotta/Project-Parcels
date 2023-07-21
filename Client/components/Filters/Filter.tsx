import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import { RangeSlider } from "../RangeSlider/RangeSlider"
import { filterParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch } from "@/redux/hooks"
import AllButton from "../AllButton/AllButton"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

export default function Filter() {
  const dispatch = useAppDispatch()

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterBy = event.target.value
    dispatch(filterParcelas(filterBy))
  }

  return (
    <>
      <div className="flex justify-between items-center bg-white w-full pt-8 pb-1 ">
        <div className="flex gap-4">
          <AllButton />
          <select
            className=" text-gray-600 hover:text-gray-400 duration-200 text-[0.80rem] font-semibold focus:outline-none focus:ring-none focus:ring-none"
            onChange={handleFilterChange}
          >
            <option value="">SUPERFICIE EN M²</option>
            <option value="5000">5.000M²</option>
            <option value="5500">5.000M² a 5.500M²</option>
            <option value="10000">5.500M² a 10.000M²</option>
            <option value="10000+">10.000M²</option>
          </select>
          <Order />
          <button
            type="button"
            onClick={openModal}
            className=" text-gray-600 hover:text-gray-400 duration-200 text-[0.80rem] font-semibold focus:outline-none focus:ring-none focus:ring-none"
          >
            PRECIO
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <RangeSlider
                        initialMin={0}
                        initialMax={100000}
                        min={0}
                        max={100000}
                        step={100}
                        priceCap={1000}
                      />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  )
}
