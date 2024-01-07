import React,{useState, useEffect} from 'react';
import './sprachen.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineStar} from 'react-icons/ai';
import { createSprachen, getAllSprachen, updateSprachen } from '../../features/sprachen/sprachenSlice';
const Sprachen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  //output
  const allSprachen = useSelector((state)=>state.sprachen.allSprachen);
  useEffect(()=>{
    dispatch(getAllSprachen())
  },[dispatch])
  //input logic
  const [formdata, setFormdata] = useState({
    programmingLanguage:"",
    stars:"",
  })  
  const {programmingLanguage} = formdata;
  const starCount = [1,2,3,4,5];
  const [starNumber, setStarNumber] = useState(0)
  const [backgrounds, setBackgrounds] = useState(Array(starCount.length).fill(""));
  const handleClick = (index)=>{
    setStarNumber(index + 1)
    setBackgrounds(backgrounds.map((bg, i)=>i <=index ? "blue":""))
  }
  const handleChange = (e)=>{
    setFormdata((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    const sprachenData = {
      programmingLanguage,
      stars:starNumber,
    }
    dispatch(createSprachen(sprachenData))
  }
  
  const handleUpdate = (id, index)=>{
    if(!user){
      return
    } else{
      const updateData = {
        id:id,
        stars:index + 1
      }
      dispatch(updateSprachen(updateData))
    }
  }
    //mobile
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='sprachen-container'>
      {windowWidth <=700 ? <MobileNavbar/> : <Navbar/>}
      <div className="sprachen-sub-container">
        <div className="sprachen-title">
          <h2>Meine Fähigkeiten im Überblick</h2>
        </div>
        <div className="sprachen-field-container">
            {allSprachen.length ? allSprachen.map((item)=>(
              <div className="sprachen-fieldWrapper" key={item._id}>
                <div className="sprachen-box">{item.programmingLanguage}</div>
                <div className="star-box">
                  {starCount.map((_, index)=>(
                    <AiOutlineStar onClick={()=>handleUpdate(item._id, index)} style={index < item.stars ?{color:"blue"} : {color:""}} key={index}/>
                  ))}
                  </div>
              </div>
            )):null}
          </div>
          <div className="formWrapper">
            {user ? <form id="sprachenForm" onSubmit={onSubmit}>
                      <div className="sprachen-formGroup">
                        <label htmlFor='programmingLanguage'>Sprache</label>
                        <input name="programmingLanguage" id="programmingLanguage" value={programmingLanguage} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="stars">
                          {starCount.map((item, index)=>(
                            <AiOutlineStar style={{color:backgrounds}} onClick={()=>handleClick(index)} key={index}/>
                          ))}
                      </div>
                      <button className="submit-btn">Absenden</button>
            </form> : null}
        </div>
      </div>
    </div>
  )
}

export default Sprachen
