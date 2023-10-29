import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline';

// You can now use these imported icons in your code.


const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center sm:flex-row m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-width-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon } />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CollectionIcon} />
        <HeaderItem title="COLLECTIONS" Icon={BadgeCheckIcon } />
        <HeaderItem title="SEARCH" Icon={SearchIcon } />
        <HeaderItem title="ACCOUNT" Icon={UserIcon } />
        
        </div>
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