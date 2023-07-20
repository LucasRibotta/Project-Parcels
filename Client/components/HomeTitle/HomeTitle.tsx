import Button from "../Button/Button"
import Link from "next/link"

export default function HomeTitle() {
  const gradientText = {
    background:
      "-webkit-linear-gradient(90deg, hsla(79, 60%, 58%, 1) 0%, hsla(156, 96%, 31%, 1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
  return (
    <div className="absolute top-60 px-[3rem] py-2 space-y-4">
      <h1 className="text-4xl font-bold">
        E-Commerce de <span style={gradientText}>Parcelas</span>
      </h1>
      <h1 className="text-lg  font-semibold">Invierte de manera inteligente</h1>
      <p className="w-[70%]">
        Ten el futuro que deseas, aprovecha cada minuto e invierte en tierra
      </p>
      <div>
        <Link href="/parcelas">
          <Button text={"Parcelas"} />
        </Link>
      </div>
    </div>
  )
}
