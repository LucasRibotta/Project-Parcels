"use client"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState, useEffect } from "react"

export default function Parcelas() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
  const dispatch = useAppDispatch()
  const parcels = useAppSelector((state) => state.parcelas.parcelas)

  useEffect(() => {
    if (data && Array.isArray(data)) {
      dispatch(setParcelas(data))
    }
  }, [data, dispatch])

  if (isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>
  if (!data || !Array.isArray(data)) return <p>no data</p>

  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] ">
      <div className="flex">
        <Filter />
        <div className="flex flex-col justify-center items-center pl-[18rem] pt-[3rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            {parcels.map((el, index) => {
              if (el.deleted === false) {
                return (
                  <Card
                    key={index}
                    name={el.name}
                    precio={`CLP $${el.price?.toLocaleString()}`}
                    superficie={el.area}
                    description={el.description}
                    image={el.image[0]}
                    id={el._id}
                  />
                )
              }
            })}
          </div>
          <CustomPagination resPerPage={2} productsCount={5} />
        </div>
      </div>
    </div>
  )
}