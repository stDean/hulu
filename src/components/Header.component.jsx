import Image from "next/image";
import {
  BadgeCheckIcon, CollectionIcon, HomeIcon,
  LightningBoltIcon, SearchIcon, UserIcon
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon.component";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title='HOME' Icon={HomeIcon} />
        <HeaderIcon title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderIcon title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderIcon title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderIcon title='SEARCH' Icon={SearchIcon} />
        <HeaderIcon title='ACCOUNT' Icon={UserIcon} />
      </div>

      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className='object-contain'
      />
    </header>
  )
}

export default Header