import { useState } from "react"

const Section =({title, description, isVisible, setIsVisible }) =>{

  return (<div className="border border-black p-2 m-2">
    <h3 className="font-bold text-xl">
        {title}
    </h3>
    {isVisible?
    (<button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>):
    (<button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>)}
    {isVisible && <p>{description}</p>}
  </div>)
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="body">
      <h1>Welcome to Instamart</h1>
      <h5>15 min door step delivery!</h5>

      <Section
      title="About Instamart"
      isVisible={visibleSection==="about"}
      setIsVisible = {()=>visibleSection==="about" ? setVisibleSection(""): setVisibleSection("about")}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
      <Section
      title="Careers"
      isVisible={visibleSection==="career"}
      setIsVisible = {()=>visibleSection==="career" ? setVisibleSection(""): setVisibleSection("career")}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
      <Section
      title="Team Instamart"
      isVisible={visibleSection==="team"}
      setIsVisible = {()=>visibleSection==="team" ? setVisibleSection(""): setVisibleSection("team")}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
    </div>
  )
}

export default Instamart
