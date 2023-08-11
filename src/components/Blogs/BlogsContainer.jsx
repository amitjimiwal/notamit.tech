import Blogs from "./Blogs"
import {blogs} from '../../amit.json'
import { useThemeContext } from "../../hooks/useThemeContext"
const BlogsContainer = () => {
  const {theme}=useThemeContext();
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="blog">
      <div className="mb-3">
        <h1 className={"text-heading font-bold "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>Latest Post</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
           {blogs.map((blogdata,index)=>(
            <Blogs heading={blogdata.blog_title} description={blogdata.blog_description} date={blogdata.post_date} readtime={blogdata.read_time} key={index} topics={blogdata.topics} bloglink={blogdata.blog_link}/>
           ))}
      </div>
    </div>
  )
}

export default BlogsContainer
