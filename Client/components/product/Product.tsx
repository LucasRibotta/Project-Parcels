import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { useEffect, useState } from "react"
import Card from "../Admin/Card"
import Link from "next/link"
import SearchBar from "../SearchBar/SearchBar"
import { useAppSession } from "@/app/hook"
import { usePathname } from "next/navigation"

type UserService = {
    email: string
    password: string
    isAdmin: boolean
    isCompany: boolean
}


const ProductSection = () => {

    const pathName = usePathname();

    const dispatch = useAppDispatch()
    const [val, setVal] = useState(false);
    const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
    const parcelas = useAppSelector(state => state.parcelas.parcelas)

    const { user, session, status } = useAppSession();

    useEffect(() => {
        setTimeout(() => {
            if (data) {
                parcelas.length === 0  && dispatch(setParcelas(data))
            }
        },2000)
        if (parcelas && Array.isArray(parcelas)) {
            dispatch(setParcelas(parcelas))
        }
    }, [parcelas, dispatch, pathName, data])

    const svgVisual = (hovered: boolean) => {
        if (hovered) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={val ? "transition-all duration-500 opacity-100" : "transition-all duration-500 opacity-0"} viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={val ? "transition-all duration-500 opacity-0": "transition-all duration-500 opacity-100"} viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            )
        }
    }




    return (
        <div className="flex flex-col flex-1 p-4  bg-gray-800 px-[50px]">
            <div className="flex w-full justify-between ">
                <Link href="/form">
                    <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4" onMouseOver={() => setVal(true)} onMouseOut={() => setVal(false)}>
                        {svgVisual(val)}
                        <h2>Agregar parcela</h2>
                    </div>
                </Link>
                <div className="flex justify-end">
                    <SearchBar />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Parcelas activas</h2>
            <div className="grid grid-cols-2 mt-6 ">
                {parcelas && user?.isCompany === true && parcelas.map(el => {
                    if (el.deleted === false && session?.user?.email === el.user) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}
                {parcelas && user?.isAdmin === true && parcelas.map(el => {
                    if (el.deleted === false ) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}

            </div>

            <h2 className="text-2xl font-bold text-white">Parcelas Ocultas</h2>
            <div className="grid grid-cols-2 mt-6 ">
                {parcelas && user?.isCompany === true && parcelas.map(el => {
                    if (el.deleted === true && session?.user?.email === el.user) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}
                {parcelas && user?.isAdmin === true && parcelas.map(el => {
                    if (el.deleted === true) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}

            </div>
        </div>
    )
}

export default ProductSection;