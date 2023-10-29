import Image from "next/image"
import HeaderItem from "./HeaderItem"


const Header = () => {
  return (
    <header className="">
          <h1>This is the header</h1>
          <HeaderItem title="HOME"/>
          <Image
              className="object-contain"
              src="https://links.papareact.com/ua6"
              width={200}
              height={100}
          />
    </header>
  )
}

export default Header