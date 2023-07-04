import React, { useEffect } from 'react'
import './referenzenDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import {createReferenzen, deleteReferenzen, getAllReferenzen} from '../../features/referenzen/referenzenSlice';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Referenzen = () => {
    const dispatch = useDispatch();
    const allReferenzen = useSelector((state)=>state.referenzen.allReferenzen);
    const isLoading = useSelector((state)=>state.referenzen.isLoading);
    const isError = useSelector((state)=>state.referenzen.isError);
    const message = useSelector((state)=>state.referenzen.message);

    useEffect(()=>{
        if(isError){
            window.alert(message)
        }
        dispatch(getAllReferenzen());
    },[isError, message, dispatch])
    const initialValues = {
        projectTitle:"",
        projectPurpose:"",
        projectDescription:"",
        generalInformation:"",
        structureList:[],
        link:"",
    }
    const ReferenzenSchema = Yup.object().shape({
        projectTitle: Yup.string().required("Bitte gib den Projekttitel ein"),
        projectPurpose:Yup.string().required("Bitte gib den Zweck des Projektes ein"),
        projectDescription:Yup.string().required("Bitte beschreibe das Project"),
        generalInformation:Yup.string().required("Bitte die allgemeinen Informationen"),
        structureList:Yup.string().min( 1, "Bitte gib ein welche Elemente auf der Seite zu finden sind und wie sie funktionieren"),
        link:Yup.string().required("Bitte den Link zu Github"),
    })
    const onSubmit = (values)=>{
        const referenzenData = {
            projectTitle: values.projectTitle,
            projectPurpose:values.projectPurpose,
            projectDescription:values.projectDescription,
            generalInformation:values.generalInformation,
            structureList:values.structureList,
            link:values.link,
        }
        dispatch(createReferenzen(referenzenData))
    }
    
    const handleDelete = async (id)=>{
        await dispatch(deleteReferenzen(id));
        dispatch(getAllReferenzen());
    }
    if(isLoading){
        return <p>Lädt noch...</p>
    }
  return (
    <div className='referenzen-d-container'>
        <div className="title-holder">
            <h3>Referenzen</h3>
        </div>
        <div className="referenzen-content">
            {allReferenzen.length ? allReferenzen.map((item)=>(
                <div className="referenzen-fieldWrapper" key={item._id}>
                    <div className="referenzen-title">
                        {item.projectTitle}
                    </div>
                    <div className="referenzen-purpose">
                        {item.projectPurpose}
                    </div>
                    <div className="referenzen-description">
                        {item.projectDescription}
                    </div>
                    <div className="generalInformation">
                        {item.generalInformation}
                    </div>
                    <div className="structureList">
                        <ul>
                            {item.structureList.length ? item.structureList.map((li, index)=>(
                                <li key={index}>{li}</li>
                            )):null}
                        </ul>
                    </div>
                    <div className="github-link">
                        <span>{item.link}</span>
                    </div>
                    <div className="buttonWrapper">
                    <AiFillDelete onClick={()=>handleDelete(item._id)} className='icons'/>
                        <Link to={{pathname:`/referenzenEdit/${item._id}`}} className='link'><AiFillEdit className='icons'/></Link>
                    </div>
                  </div>
            )):null}     
        </div>
      <Formik 
      initialValues={initialValues}
      validationSchema={ReferenzenSchema}
      onSubmit={onSubmit}
      >
        {({isSubmitting})=>(
            <Form id="referenzen-form">
            <div className="formGroup-referenzen">
                <label htmlFor='projectTitle'>Projekttitel</label>
                <Field as="textarea" name="projectTitle" className="referenzen-input"/>
                <ErrorMessage name="projectTitle" component="div" className='error'/>
            </div>
            <div className="formGroup-referenzen">
                <label htmlFor='projectPurpose'>Projektzweck</label>
                <Field as="textarea" name="projectPurpose" className="referenzen-input"/>
                <ErrorMessage name="projectPurpose" component="div" className='error'/>
            </div>
            <div className="formGroup-referenzen">
                <label htmlFor='projectDescription'>Projektbeschreibung</label>
                <Field as="textarea" name="projectDescription" className="referenzen-input"/>
                <ErrorMessage name="projectDescription" component="div" className='error'/>
            </div>
            <div className="formGroup-referenzen">
                <label htmlFor='generalInformation'>Allgemeine Information</label>
                <Field as="textarea" name="generalInformation" className="referenzen-input"/>
                <ErrorMessage name="generalInformation" component="div" className='error'/>
            </div>
            <div className="formGroup-referenzen">
                <label htmlFor='structureList'>Elemente auf der Seite</label>
                <Field as="textarea" name="structureList" className="referenzen-input"/>
                <ErrorMessage name="structureList" component="div" className='error'/>
            </div>
            <div className="formGroup-referenzen">
                <label htmlFor='link'>Link zu Github</label>
                <Field name="link" className="referenzen-input"/>
                <ErrorMessage name="link" component="div" className='error'/>
            </div>
            <button type="submit" disabled={isSubmitting}>Absenden</button>
        </Form>
        )}
        
      </Formik>
    </div>
  )
}

export default Referenzen
