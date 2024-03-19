import { useState, useEffect, useRef } from "react"
import { useForm } from "./useFormHook"
const ExpeInfo= props=>{
    const[value, handleChange]= useForm({
        companyName:'Dels',
        PositionTile :'senior developer',
        responsibility:'maintenance',
        DateStart:'Month/year',
        DateEnd:'Month/year'
    })

    const [editMode, setEditMode]= useState(false)
    const btnRef = useRef()

    useEffect(() => {
        props.previewMode && btnRef.current && btnRef.current.click();
    }, [props.previewMode]);

    const saveOrEdit=(e)=>{
        e.preventDefault()
        setEditMode(!editMode)
    }

    const displayInfo=()=>{
        return editMode ? (
            <form onSubmit={saveOrEdit}>
                <fieldset>
                    <legend>Experience Information Section</legend>
                    <label htmlFor="companyName">Company name: </label><br/>
                    <input type="text" name="companyName" id="companyName" value={value.companyName} onChange={handleChange}/>
                    <br /><br/>

                    <label htmlFor="position">Position title:  </label><br/>
                    <input type="text" name="position" id="position"  value={value.PositionTile} onChange={handleChange}/>
                    <br /><br/>

                    <label htmlFor="res">Main Responsibilities of your jobs:  </label><br/>
                    <input type="text" name="res" id="res" value={value.responsibility}  onChange={handleChange}/>
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
                <legend>Experience Information Section</legend>
                    <h4>{value.companyName}</h4>
                    <p>{value.PositionTile}</p>
                    <p>{value.responsibility}</p>
                    <p>{value.DateStart}</p>
                    <p>{value.DateEnd}</p>
                    {props.previewMode ? null:
                        <button onClick={saveOrEdit} className="btn btn--edit">EDIT</button>
                    }
                </fieldset>
                
            </div>
        )
    }
    return(
        <>
            <div className="header__general-info">{displayInfo()}</div>
        </>
    )
}
export default ExpeInfo
