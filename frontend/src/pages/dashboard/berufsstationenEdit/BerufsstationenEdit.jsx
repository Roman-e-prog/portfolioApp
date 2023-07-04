import React, { useEffect, useState } from 'react';
import './berufsstationenEdit.scss';
import { useDispatch, useSelector } from 'react-redux';
import {updateBerufsstationen, getBerufsstation} from '../../../features/berufsstationen/berufsstationenSlice';
import {useNavigate, useParams} from 'react-router-dom';
const BerufsstationenEdit = () => {
    const dispatch = useDispatch();
    const berufsstation = useSelector((state)=>state.berufsstationen.berufsstation);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getBerufsstation(id));
    },[id, dispatch])
    const [formdata, setFormdata] = useState({
        entry:"",
        close:"",
        textBold:"",
        textNormal:"",
    })
    const {entry, close, textBold, textNormal} = formdata;
    useEffect(()=>{
        if(berufsstation){
            setFormdata({
                entry:berufsstation.entry,
                close:berufsstation.close,
                textBold:berufsstation.textBold,
                textNormal:berufsstation.textNormal,
            })
        }
    },[berufsstation])
  
    const onSubmit = (values)=>{
        const berufsstationenData = {
            entry,
            close,
            textBold,
            textNormal,
        }
        const updateData ={
            id:id,
            berufsstationenData:berufsstationenData
        }
        dispatch(updateBerufsstationen(updateData))
    }
  return (
    <div className='berufsstationen-e-container'>
        <div className="title-holder">
            <h3>Berufsstationen update</h3>
        </div>
        <div className="berufsstationen-formWrapper">
            <form onSubmit={onSubmit}>
                <div className="berufsstationen-formGroup">
                    <label htmlFor='entry'>Eintrittsdatum</label>
                    <input type="text" 
                    name="entry" 
                    id="entry" 
                    defaultValue={entry} 
                    onChange={(e)=>setFormdata({...formdata, entry:e.target.value})}/>
                </div>
                <div className="berufsstationen-formGroup">
                    <label htmlFor='close'>Austrittsdatum</label>
                    <input type="text" 
                    name="close" 
                    id="close" 
                    defaultValue={close} 
                    onChange={(e)=>setFormdata({...formdata, close:e.target.value})}/>
                </div>
                <div className="berufsstationen-formGroup">
                    <label htmlFor='textBold'>Position</label>
                    <textarea 
                    name="textBold" 
                    id="textBold" 
                    defaultValue={textBold} 
                    onChange={(e)=>setFormdata({...formdata, textBold:e.target.value})}></textarea>
                </div>
                <div className="berufsstationen-formGroup">
                    <label htmlFor='textNormal'>Bei Arbeitgeber</label>
                    <textarea
                    name="textNormal" 
                    id="textNormal" 
                    defaultValue={textNormal} 
                    onChange={(e)=>setFormdata({...formdata, textNormal:e.target.value})}></textarea>
                </div>
                <button id="bubmit-btn">Absenden</button>
            </form>
        </div>
           
        <button onClick={()=>navigate(-1)} id="navigate-btn">Okay</button>
    </div>
  )
}

export default BerufsstationenEdit
