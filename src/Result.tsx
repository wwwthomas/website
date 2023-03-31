import tw from "twin.macro"

const RES = tw.div` flex justify-evenly max-w-xl  items-baseline `
const A = tw.a`ml-2 hover:bg-warmblue hover:text-almostblack`

type cmd =({
    command: string;
    description: string;
    content: string;
} | {
    command: string;
    description: string;
    content: {
        frontEnd: string[];
        backEnd: string[];
        tools: string[];
    };
})
const data:cmd[] =[
    {command: 'about' , description: 'brief summary' , content: 'Octo Rocks is an innovative AI platform that focuses on enhancing the accessibility and user experience of AI models and tools. Leveraging the concepts behind Ugly Requests Require Beautiful Prompts (URRBP), Octo Rocks incorporates a human-optimized layer for prompt optimization, intelligent AI model selection, and seamless interaction management. The platform bridges the gap between expertly generated prompts and user customization by simplifying complex AI layers and enabling adaptable prompt engineering tailored to various user needs. As a result, Octo Rocks sets the stage for revolutionizing AI accessibility and multi-modal task handling in a user-friendly and efficient manner.'},
    {command: 'predictexpert' , description: 'predict expert website' , content: 'https://predict.expert'},
    {command: 'email' , description: 'you can email us' , content: 'william@predict.expert'},
    {command: 'linkedin' , description: 'you can follow us' , content: 'https://www.linkedin.com/company/predict-expert-ai/'},
    {command: 'music' , description: 'a little break' , content: 'https://www.youtube.com/watch?v=wDjeBNv6ip0'},
    {command: 'skills' , description: 'we love AI' , 
      content: {frontEnd :['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'JQuery', 'JSON', 'ReactJS', 'TypeScript', 'Redux'],
                backEnd  :['Mysql', 'Sql', 'MongoDB', 'PHP', 'Laravel', 'Python'], 
                tools: ['Vscode', 'Atom', 'Vim', 'Linux', 'Git', 'Github', 'Gitlab', 'LAMP', 'Canva', 'Figma', 'UML', 'jira','Docker']}},
    {command: 'repo' , description: 'check this project\'s repository' ,content:'https://github.com/git-akazam'},
    {command: 'quote',description:'quote of the day' ,content:'If you want to lift yourself up, lift up someone else.'},
    {command: 'clear' , description: 'clear terminal' ,content:''},
]

export default function Result({commandInput}:any) {
  const res = commandInput=='help' ? [...data] : [...data].filter((c:cmd)=> c.command== commandInput )
  return (
    <div className="my-2 mr-2 text-coolgrey ">
      {res.length===0 && <p>command not found</p>}

    {  res.length===data.length && 
        res.map((cm:cmd,i:number)=>{
          return (
          <RES key={i}>
             <p className="flex-1 -mr-16">{cm.command}</p>
             <p className="flex-1">{cm.description}</p>
          </RES>
          )
        }) 
    }
    {  res.length<data.length && 
        res.map((cm:any,i:number)=>{
          if(cm.command ==='skills'){
            return (
              <div key={i} >
               <p>front end : 
               {cm.content.frontEnd.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
               <p>back end : 
               {cm.content.backEnd.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
               <p>tools : 
               {cm.content.tools.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
              </div>
            )
          }
          else{
            if(cm.command==='projects'){
            return <p key={i}>check out my github account : 
            <A href={cm.content} target='_blank'>{cm.content}</A></p>
            }else{
            if(cm.command==='linkedin'){
            return <p key={i}>check out my linkedin account : 
            <A href={cm.content} target='_blank'>{cm.content}</A></p>}
            else{
              if(cm.command==='music'){
              return <div className="-ml-2"><A href={cm.content} key={i} target='_blank'>{cm.content}</A></div>}
              else{
                if(cm.command==='repo'){
                return (
                <div key={i}>
                <p>i built this website from scratch using React and Typescript</p>
                <p>check out this project's repository : 
                <A href={cm.content} target='_blank'>{cm.content}</A></p>
                </div>)
                }
                else{
                  return <p key={i}>{cm.content}</p>
                }
              }
            }
            }
          }

        })
    }   
    

    </div>
  )
}
