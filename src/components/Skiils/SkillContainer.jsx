import Skill from "./Skill"
import {skills} from '../../amit.json'
const SkillContainer = () => {
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="skills">
      <div className="mb-3">
            <h1 className="text-heading text-secondary font-bold">Tech Stack</h1>
      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Languages</h4>
            <div className="flex flex-wrap">
             {skills.languages.map((skill,index)=>(
                  <Skill icon={skill.icon} title={skill.title} key={index}/>
             ))}
            </div>

      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Tools and Technologies</h4>
            <div className="flex flex-wrap">
             {skills.tools.map((skill,index)=>(
                  <Skill icon={skill.icon} title={skill.title} key={index}/>
             ))}
            </div>
      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Platforms</h4>
            <div className="flex flex-wrap">
             {skills.platform.map((skill,index)=>(
                  <Skill icon={skill.icon} title={skill.title} key={index}/>
             ))}
            </div>
      </div>
    </div>
  )
}

export default SkillContainer
