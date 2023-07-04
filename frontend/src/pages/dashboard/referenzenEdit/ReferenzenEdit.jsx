import React, { useEffect, useState } from 'react'
import './referenzenEdit.scss';
import { useDispatch, useSelector } from 'react-redux';
import {getReferenzen, updateReferenzen} from '../../../features/referenzen/referenzenSlice';
import {useNavigate, useParams} from 'react-router-dom';
const ReferenzenEdit = () => {
    const dispatch = useDispatch();
    const referenz = useSelector((state)=>state.referenzen.referenz);
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getReferenzen(id));
    },[id, dispatch])
    const [formdata, setFormdata] = useState({
        projectTitle:"",
        projectPurpose:"",
        projectDescription:"",
        generalInformation:"",
        structureList:[""],
        link:"",
    })
    const {projectTitle, projectPurpose, projectDescription, generalInformation, structureList, link} = formdata;
useEffect(()=>{
    if(referenz){
        setFormdata({
            projectTitle:referenz.projectTitle,
            projectPurpose:referenz.projectPurpose,
            projectDescription:referenz.projectDescription,
            generalInformation:referenz.generalInformation,
            structureList:referenz.structureList,
            link:referenz.link,
        })
    }
},[referenz])
    const onSubmit = (e)=>{
        e.preventDefault();
        const referenzenData = {
            projectTitle,
            projectPurpose,
            projectDescription,
            generalInformation,
            structureList,
            link,
        }
        const updateData = {
            id:id,
            referenzenData:referenzenData
        }
        dispatch(updateReferenzen(updateData))
    }
  return (
    <div className='referenzen-e-container'>
        <div className="title-holder">
            <h3>Referenzen Update</h3>
        </div>
        <div className="referenzen-formWrapper">
            <form onSubmit={onSubmit}>
                <div className="referenzen-formGroup">
                    <label htmlFor='projectTitle'>Projekttitel</label>
                    <input type="text" 
                    name="projectTitle" 
                    id="projectTitle" 
                    defaultValue={projectTitle} 
                    onChange={(e)=>setFormdata({...formdata, projectTitle:e.target.value})}/>
                </div>
                <div className="referenzen-formGroup">
                    <label htmlFor='projectPurpose'>Zweck des Projektes</label>
                    <textarea
                    name="projectPurpose" 
                    id="projectPurpose" 
                    defaultValue={projectPurpose} 
                    onChange={(e)=>setFormdata({...formdata, projectPurpose:e.target.value})}></textarea>
                </div>
                <div className="referenzen-formGroup">
                    <label htmlFor='projectDescription'>Projektbeschreibung</label>
                    <textarea
                    name="projectDescription" 
                    id="projectDescription" 
                    defaultValue={projectDescription} 
                    onChange={(e)=>setFormdata({...formdata, projectDescription:e.target.value})}></textarea>
                </div>
                <div className="referenzen-formGroup">
                    <label htmlFor='generalInformation'>Information</label>
                    <textarea type="text" 
                    name="generalInformation" 
                    id="generalInformation" 
                    defaultValue={generalInformation} 
                    onChange={(e)=>setFormdata({...formdata, generalInformation:e.target.value})}></textarea>
                </div>
                <div className="referenzen-formGroup">
                    <label htmlFor='structureList'>Struktur</label>
                    <input type="text" 
                    name="structureList" 
                    id="structureList" 
                    defaultValue={structureList} 
                    onChange={(e)=>setFormdata({...formdata, structureList:e.target.value})}/>
                </div>
                <div className="referenzen-formGroup">
                    <label htmlFor='link'>Link</label>
                    <input type="text" 
                    name="link" 
                    id="link" 
                    defaultValue={link} 
                    onChange={(e)=>setFormdata({...formdata, link:e.target.value})}/>
                </div>
                <button id="submit-btn">Absenden</button>
            </form>
        </div>
           
        <button onClick={()=>navigate(-1)} id="navigate-btn">Okay</button>
    </div>
  )
}

export default ReferenzenEdit
