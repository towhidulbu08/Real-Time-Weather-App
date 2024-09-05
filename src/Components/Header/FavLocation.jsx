import heart from "../../assets/heart.svg";

export default function FavLocation({ onToggle }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={heart} alt="" />
      <span className="text-red-400 font-semibold" onClick={onToggle}>
        Favourite Locations
      </span>
    </div>
  );
}
