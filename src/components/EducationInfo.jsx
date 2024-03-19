import { useState, useRef, useEffect } from "react"
import { useForm } from "./useFormHook"

const EducationInfo= props =>{
    const [value, handleChange]= useForm({
        SchName:'Obafemi Awolowo University',
        title:'course studied',
        DateStart:'Month/year',
        DateEnd:'Month/year'
    })
    const [editMode, setEditMode]= useState(false)
    const btnRef = useRef();

  
    useEffect(() => {
        props.previewMode && btnRef.current && btnRef.current.click();
    }, [props.previewMode]);

    const saveOrEdit=(e)=>{
        e.preventDefault()
        setEditMode(!editMode)
    }
   
    const displayInfo=()=>{
        return editMode? (
            <form onSubmit={saveOrEdit}>
                <fieldset>
                    <legend>Education Information Section</legend>
                    <label htmlFor="schName">School Name: </label><br/>
                    <input type="text" name="SchName" id="SchName" value={value.SchName} onChange={handleChange}/>
                    <br /><br/>

                    <label htmlFor="title">Title Study:  </label><br/>
                    <input type="text" name="title" id="title" value={value.title} onChange={handleChange} />
                    <br /><br/>

                    <label htmlFor="year">Date Start:  </label><br/>
                    <input type="text" name="year" id="year"  value={value.DateStart} onChange={handleChange}/>
                    <br/><br/>
                    <label htmlFor="year">Date End:  </label><br/>
                    <input type="text" name="year" id="year"  value={value.DateEnd} onChange={handleChange}/>
                    <br/><br/>
                    <button onClick={saveOrEdit} ref={btnRef} className="btn btn--save">SAVE</button>
                </fieldset>
                
            </form>
        ):(
            <div className="header__name">
                <fieldset>
                <legend>Education Information Section</legend>
                    <h4>{value.SchName}</h4>
                    <p>{value.title}</p>
                    <p>{value.DateStart}</p>
                    <p>{value.DateEnd}</p>
                    {props.previewMode ? null:(
                        <button onClick={saveOrEdit} className="btn btn--edit">EDIT</button>
                    )}
                </fieldset>
            </div>
        );
    }
    return(
        <div className="header__general-info">{displayInfo()}</div>
    )
}
export default EducationInfo

{ }