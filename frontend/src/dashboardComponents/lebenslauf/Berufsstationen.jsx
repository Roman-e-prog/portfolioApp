import React, { useEffect } from 'react';
import './berufsstationenDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import {createBerufsstationen, deleteBerufsstationen, getAllBerufsstationen} from '../../features/berufsstationen/berufsstationenSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Berufsstationen = () => {
    const dispatch = useDispatch();
    const allBerufsstationen = useSelector((state)=>state.berufsstationen.allBerufsstationen);
    const isLoading = useSelector((state)=>state.berufsstationen.isLoading);
    const isError = useSelector((state)=>state.berufsstationen.isError);
    const message= useSelector((state)=>state.berufsstationen.message);

    useEffect(()=>{
        if(isError){
          window.alert(message);
        }
        dispatch(getAllBerufsstationen())
      }, [isError, message, dispatch])
    const initialValues = {
        entry:"",
        close:"",
        textBold:"",
        textNormal:"",
    }
    const berufsstationenSchema = Yup.object().shape({
        entry: Yup.string().required("Bitte gib das Anfangsdatum ein"),
        close:Yup.string().required("Bitte gib das Enddatum ein"),
        textBold:Yup.string().required("Bitte gib die Tätigkeit ein"),
        textNormal:Yup.string().required("Bitte gib den Arbeitgeber ein"),
    })
    const onSubmit = (values)=>{
        const berufsstationenData = {
            entry:values.entry,
            close:values.close,
            textBold:values.textBold,
            textNormal:values.textNormal,
        }
        dispatch(createBerufsstationen(berufsstationenData))
    }

    const handleDelete = async (id)=>{
        await dispatch(deleteBerufsstationen(id));
        dispatch(getAllBerufsstationen());
    }
    if(isLoading){
        return <p>Lädt noch...</p>
    }
  return (
    <div className='berufsstationen-d-container'>
        <div className="title-holder">
            <h3>Berufsstationen</h3>
        </div>
        <div className="content-berufsstationen">
            {allBerufsstationen.length ? allBerufsstationen.map((item)=>(
                <div className="fieldWrapper-berufsstationen" key={item._id}>
                        <div className="datumWrapper">
                        <span>{item.entry} - </span>
                        <span> {item.close}</span>
                    </div>
                    <div className="workWrapper">
                        <span className='bold'>{item.textBold}</span>
                        <span>{item.textNormal}</span>
                    </div>
                    <div className="buttonWrapper">
                        <AiFillDelete onClick={()=>handleDelete(item._id)} className="icons"/>
                        <Link to={{pathname:`/berufsstationenEdit/${item._id}`}} className='link'><AiFillEdit className='icons'/></Link>
                    </div>
                </div>
            )):null}
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={berufsstationenSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting})=>(
                <Form id="berufsstationen-form">
                    <div className="formGroup-berufsstationen">
                        <label htmlFor='entry'>Eintrittsdatum</label>
                        <Field name="entry" className="berufsstationen-input"/>
                        <ErrorMessage name="entry" component="div" className="error"/>
                    </div>
                    <div className="formGroup-berufsstationen">
                        <label htmlFor='close'>Austrittsdatum</label>
                        <Field name="close" className="berufsstationen-input"/>
                        <ErrorMessage name="close" component="div" className="error"/>
                    </div>
                    <div className="formGroup-berufsstationen">
                        <label htmlFor='textBold'>Tätigkeit</label>
                        <Field as="textarea" name="textBold" className="berufsstationen-input"/>
                        <ErrorMessage name="textBold" component="div" className="error"/>
                    </div>
                    <div className="formGroup-berufsstationen">
                        <label htmlFor='textNormal'>Bei Arbeitgeber</label>
                        <Field as="textarea" name="textNormal" className="berufsstationen-input"/>
                        <ErrorMessage name="textNormal" component="div" className="error"/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>Absenden</button>
                </Form>
                
            )}
        </Formik>
      
    </div>
  )
}

export default Berufsstationen
