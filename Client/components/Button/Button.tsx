type ButtonProps = {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-transparent border-white border-[1px] text-white hover:bg-[#51a8a1]  ease-in-out duration-300 px-4 py-[6px] rounded">
      {text}
    </button>
  )
}