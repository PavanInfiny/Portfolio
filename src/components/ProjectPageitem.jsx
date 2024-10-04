import React, { useEffect } from "react";
import { useContext } from "react";
import { Contextstore } from "../store/store";
import css from "../styles/Projectpageitem.module.css";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import Technology from "./Technology";
import { useParams } from "react-router-dom";
import Workingpoints from "./Workingpoints";

function ProjectPageitem(props) {
  const {id} = useParams();
  const obj = useContext(Contextstore)
  const obj2 = obj.projectdetail.filter((i) => i.id == id);
  const loading=obj.loading;

  const setprojectdetail = obj.setprojectdetail;
  console.log("point 1",obj);
  // console.log("point 2",obj3);
  console.log("point 3  :",id);
  // const obj2 = obj3.filter((i) => i.id == id);
  console.log("point 2");
  

  window.scrollTo(0, 0);
  if(loading){
    return(
      <>
      loading
      </>
    )
  }

  return (
    <>
      <div className={css.complete}>
        <div className={css.title}>
          <h1>{obj2[0].projecttitle.toUpperCase()}</h1>
        </div>

        <div className={css.subtitle}>
          <h5>ABSTRACT</h5>
        </div>
        <div className={css.desc}>
          <p>{obj2[0].abstract}</p>
        </div>
        <div>
          <div className={css.subtitle}>
            <h5>TECHNOLOGY USED</h5>
          </div>
          <br />
          <Technology id={id}></Technology>
        </div>
        <br />
        <div className={css.subtitle}>
          <h5>LINKS</h5>
        </div>
        <div
          className="center"
          style={{ marginLeft: "20%", marginTop: "20px", marginRight: "20%" }}
        >
          <table class="table table-dark table-striped-columns">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">PPT</th>
                <th scope="col">Report</th>
                <th scope="col">Code(Git)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>
                  <a href="">link</a>
                </td>
                <td>
                  <a href="">link</a>
                </td>
                <td>
                  <a href="">link</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className={css.subtitle}>
          <h5>WORKING</h5>
        </div>
        <br />
        <Workingpoints id={id}></Workingpoints>
        <div className={css.subtitle}>
          <h5>IMAGES</h5>
        </div>
        <br />
        <div className={css.photos}></div>
      </div>
      <br />
      <br />
    </>
  );
}


export default ProjectPageitem;
