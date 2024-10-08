import { useContext } from "react";
import Individualskills from "./individualskill";
import { Contextstore } from "../store/store";
function Skills(){
  const contextobj=useContext(Contextstore);
  const skillobjarray=contextobj.skills;
  console.log("skill",skillobjarray)
  const skillloading=contextobj.skillload;
  const progress=[75,50];
  // skillobjarray.map(n=>console.log("consolr",n.percent));
  console.log("through obj",skillobjarray.percent);
  console.log("direst",progress[1]);
  if(skillloading){
    return "loading";
  }
  return (
    <>
    <div id="skills">
        <h1 style={{ marginTop: "40px", textAlign: "center", color: "white"} }>
          Skills
        </h1>

      </div>
      <br />
      <div>
          {skillobjarray.map(n=>(
            <Individualskills sname={n.name} sprogress={n.percent} snotes={n.link} slno={n.id}></Individualskills>))}
      </div>
    </>
  );
}
//,"C","JavaScript","ReactJs","SpringBoot","Servlets","Hibernate","JDBC"
export default Skills;