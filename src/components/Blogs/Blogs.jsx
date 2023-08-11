
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../hooks/useThemeContext";
const Blogs = ({heading,description,date,readtime,key,bloglink,topics}) => {
  const {theme}=useThemeContext();
  return (
    <div className={"p-4 rounded-xl "+`${theme==='dark' ? 'bg-[#22223b]':'bg-project'}`} key={key}>
      <div>
            <h1 className={"text-2xl font-bold "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>{heading}</h1>
            <p className="text-primary text-sm">{date} .  {readtime}</p>
            <p className={"text-base tracking-wider my-3 "+`${theme==='dark' ? 'text-white':'text-[#1A202C]'}`}>{description}</p>
            <div className="my-2">
                  <button className="bg-[#00A0DC] p-2 rounded-xl cursor-pointer text-white font-semibold"><a href={bloglink} target="_blank" rel="noreferrer">Read More   <FontAwesomeIcon icon={faArrowRight} beat style={{color: "#ffffff",}} /></a></button>
            </div>
            <div className="my-3 flex flex-wrap gap-3">
           {topics.map((topic,index)=>(
            <span className="text-sm font-bold  bg-blue-400 p-1 rounded-md text-[#1A202C]" key={index}> #{topic}
            </span> 
           ))} 
            </div>
      </div>
    </div>
  )
}

export default Blogs
