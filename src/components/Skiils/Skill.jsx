const Skill = ({icon,title,key}) => {
  return (
    <div className="bg-skill flex p-2 items-center justify-center gap-4 w-36 rounded-xl m-3 cursor-pointer" key={key}>
      <img src={icon} className="w-[30px]"/>
      <p>{title}</p>
    </div>
  )
}

export default Skill
