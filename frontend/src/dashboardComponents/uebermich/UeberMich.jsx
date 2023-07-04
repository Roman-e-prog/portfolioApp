import React,{useEffect} from 'react';
import './uebermichDashboard.scss';
import {useDispatch, useSelector} from 'react-redux';
import {createUeberMich, deleteUeberMich, getAllUeberMich} from '../../features/ueberMich/ueberMichSlice';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const UeberMich = () => {
  const dispatch = useDispatch();
  const allUeberMich = useSelector((state)=>state.ueberMich.allUeberMich);
  const isLoading = useSelector((state)=>state.ueberMich.isLoading);
  const isError = useSelector((state)=>state.ueberMich.isError);
  const message = useSelector((state)=>state.ueberMich.message);
  useEffect(()=>{
    if(isError){
      window.alert(message);
    }
    dispatch(getAllUeberMich())
  }, [isError, message, dispatch])
  const initialValues = {
    content:"",
  }
  const ueberMichSchema = Yup.object().shape({
    content: Yup.string().required("Bitte gib den Über mich Text ein"),
  })
  const onSubmit  = (values)=>{
    const ueberMichData = {
      content:values.content,
    }
    dispatch(createUeberMich(ueberMichData))
  }
  const handleDelete = async (id)=>{
    await dispatch(deleteUeberMich(id));
    dispatch(getAllUeberMich());
}
  if(isLoading){
    return <p>Lädt noch...</p>
  }
  return (
    <div className='ueberMich-d-container'>
      <div className="title-holder">
            <h3>Über mich</h3>
        </div>
        <div className="ueberMich-container">
          {allUeberMich.length ? allUeberMich.map((item)=>(
            <div className="ueberMich-fieldWrapper" key={item._id}>
              <span>{item.content}</span>
              <div className="buttonWrapper">
                <AiFillDelete onClick={()=>handleDelete(item._id)} className="icons"/>
                  <Link to={{pathname:`/ueberMichEdit/${item._id}`}} className="link"><AiFillEdit className="icons"/></Link>
              </div>
            </div>
          )):null}
        </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ueberMichSchema}
        onSubmit={onSubmit}
      >
        {({
            isSubmitting,
        })=>(
          <Form id="ueberMich-form">
            <Field as="textarea" 
                name="content"  
                placeholder="Ueber Mich Beitrag"
                id="ueberMich-textarea"
                /> 
                 <ErrorMessage name="content" component="div" className='error'/>
            <button type="submit" disabled={isSubmitting}>
              Absenden
            </button>  
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default UeberMich
