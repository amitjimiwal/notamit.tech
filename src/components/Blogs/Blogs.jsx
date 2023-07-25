
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Blogs = ({heading,description,date,readtime,key,bloglink,topics}) => {
  return (
    <div className="p-4 bg-project rounded-xl" key={key}>
      <div>
            <h1 className="text-secondary text-2xl font-bold">{heading}</h1>
            <p className="text-primary text-sm">{date} .  {readtime}</p>
            <p className="text-base text-[#1A202C] tracking-wider my-3">{description}</p>
            <div className="my-2">
                  <button className="bg-[#00A0DC] p-2 rounded-xl cursor-pointer text-white font-semibold"><a href={bloglink} target="_blank" rel="noreferrer">Read More   <FontAwesomeIcon icon={faArrowRight} beat style={{color: "#ffffff",}} /></a></button>
            </div>
            <div className="my-3">
           {topics.map((topic,index)=>(
            <span className="text-sm font-bold mr-4 bg-blue-400 p-1 rounded-md text-[#1A202C]" key={index}> #{topic}
            </span> 
           ))} 
            </div>
      </div>
    </div>
  )
}

export default Blogs
