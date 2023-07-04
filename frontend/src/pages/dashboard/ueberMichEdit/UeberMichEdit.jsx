import React,{useEffect, useState} from 'react';
import './ueberMichEdit.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getUeberMich, updateUeberMich} from '../../../features/ueberMich/ueberMichSlice';
import {useNavigate, useParams} from 'react-router-dom';
const UeberMichEdit = () => {
  const dispatch = useDispatch();
  const ueberMich = useSelector((state)=>state.ueberMich.ueberMich);
  const navigate = useNavigate();
const {id} = useParams();
  useEffect(()=>{
      dispatch(getUeberMich(id))
  }, [id, dispatch])
  const [formdata, setFormdata] = useState({
    content:"",
  })
  const {content} = formdata;
  useEffect(() => {
    if(ueberMich) {
      setFormdata({
        content:ueberMich.content
      })
    }
  }, [ueberMich]);
  console.log(formdata);
  const onSubmit  = (e)=>{
    e.preventDefault();
    const ueberMichData = {
      content,
    }
    const updateData = {
      id:id,
      ueberMichData:ueberMichData
    }
    console.log(updateData)
    dispatch(updateUeberMich(updateData))
  }
  return (
    <div className='ueberMich-e-container'>
      <div className="title-holder">
            <h3>Über mich Update</h3>
        </div>
        <div className="ueberMich-e-formWrapper">
          <form onSubmit={onSubmit}>
            <div className="ueberMich-formGroup">
              <label htmlFor='content'>Update</label>
              <textarea name="content" 
              id="ueberMich-textarea" 
              defaultValue={content} 
              onChange={(e)=>setFormdata({...formdata, content:e.target.value})}>
              </textarea>
            </div>
            <button id="submit-btn">Absenden</button>
          </form>
        </div>
      <button onClick={()=>navigate(-1)} id="navigate-btn" >Okay</button>
    </div>
  )
}

export default UeberMichEdit
