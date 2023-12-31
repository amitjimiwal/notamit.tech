import Githubsvg from "../../assets/svg/github.svg";
import { useThemeContext } from "../../hooks/useThemeContext";
import Goto from "../icons/Goto";
const Project = ({projectname,description,preview,github,live,techstack,key}) => {
  const {theme}=useThemeContext();
  return (
    <div className={" border-2  rounded-2xl my-3 "+`${theme==='dark' ? 'bg-[#22223b] border-[#22223b]':'bg-project border-project'}`} key={key}>
      <div className="flex items-center bg-purple-700 p-2 rounded-t-2xl">
        <span className="w-4 h-4 bg-yellow-600 rounded-full mx-2"></span>
        <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
        <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
        <div className="flex items-center gap-2 mx-auto font-bold text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
          </svg>
          <span className="text-bordercolor">amit.dev</span>
        </div>
      </div>
      <div className="text-center mt-3">
        <h1 className={"text-xl font-bold "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>
          {projectname}
        </h1>
      </div>
      <div className="px-10 my-3">
        <img
          src={preview}
          className="rounded-xl"
        />
      </div>
      <div className="mx-10 border-2 p-4 rounded-xl flex items-center gap-5 bg-[#ADEAE8] text-sm">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
          </svg>
        </span>
        <span>
         {description}
        </span>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className={"cursor-pointer mt-3 "+`${theme==='dark' ? 'text-white':'text-dark'}`}>
          <a
            href={github}
            target="_blank"
            className="font-bold p-1 rounded-xl flex items-center gap-1 text-dark border-2 border-dark"
            rel="noreferrer"
          >
            <img src={Githubsvg} className={`${theme==='dark' ? 'text-white':'text-dark'}`} />
            Github
          </a>
        </div>
        <div className={"cursor-pointer mt-3 "+`${theme==='dark' ? 'text-white':'text-dark'}`}>
          <a
            href={live}
            target="_blank"
            className="font-bold p-1 rounded-xl flex items-center gap-1 text-dark border-2 border-dark"
            rel="noreferrer"
          >
            <Goto />
            Link
          </a>
        </div>
      </div>
      <div className="w-full text-center my-3">
        {techstack.map((stack,index)=>(
            <span className="text-sm  font-bold mx-4 bg-blue-400 p-1 rounded-md" key={index}>
        #{stack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
