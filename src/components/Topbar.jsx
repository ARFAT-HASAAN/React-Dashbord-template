import React from 'react'
import '../ComponentsStyles/Topbar.css'
import { AiFillBell, AiOutlineGlobal, AiFillSetting } from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="Topbar__Wrapper">
        <div className="left">
          <div className="logo__container">
            <span className="logo"> Recat Dashbord </span>
          </div>
        </div>

        <div className="Right">
          <div className="icon__container">
            <div className="icon__div">
              <AiFillBell className="icon" size={25} title={'notification'} />
              <span className="icon__counter">4</span>
            </div>

            <div className="icon__div">
              <AiOutlineGlobal
                className="icon"
                size={25}
                title={'notification'}
              />
            </div>
            <div className="icon__div">
              <AiFillSetting
                className="icon"
                size={25}
                title={'notification'}
              />
            </div>

            <div className="user__div">
              <img
                className="user__image"
                src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk="
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
