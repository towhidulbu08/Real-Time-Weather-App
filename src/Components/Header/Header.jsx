import { useState } from "react";
import logo from "../../assets/logo.svg";
import FavListModal from "./FavListModal";
import FavLocation from "./FavLocation";
import Search from "./Search";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);
  function handleToggleModal() {}
  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <a href="./index.html">
            <img className="h-9" src={logo} alt="Weather App" />
          </a>

          <div className="flex items-center gap-4 relative">
            <Search />

            <FavLocation onToggle={() => setShowFavModal(!showFavModal)} />

            {showFavModal && <FavListModal />}
          </div>
        </nav>
      </header>
    </>
  );
}
