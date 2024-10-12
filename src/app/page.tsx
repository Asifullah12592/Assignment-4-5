import Blogs from "./Blogs/page"
export default function Home(){
  return(
    <div>

  <div className="content">
       <div className="textArea">
                <h1>Hi, I'm <span>Hafiz Asifullah</span><br />
                    Frontend Developer</h1>
       </div>
        
      
            <div className="img"><img src="https://c8.alamy.com/comp/2PX4R2E/writing-displaying-text-front-end-development-business-showcase-altering-data-to-graphical-interface-for-user-to-view-2PX4R2E.jpg" alt="img address copied" /></div>

  </div>
  <Blogs/>

    </div>
  )
}
