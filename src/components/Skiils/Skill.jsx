import { useThemeContext } from "../../hooks/useThemeContext"

const Skill = ({icon,title,key}) => {
  const {theme}=useThemeContext();
  return (
    <div className={" flex p-2 items-center justify-center gap-4 w-32 sm:w-36 rounded-xl m-3 cursor-pointer "+`${theme==='dark' ? 'bg-[#22223b]':'bg-skill'}`} key={key}>
      <img src={icon} className="w-[30px]"/>
      <p className={`${theme==='dark' ? 'text-white':'text-secondary'}`}>{title}</p>
    </div>
  )
}
export default Skill
