import React from 'react';
import "./../ComponentsStyles/Sidebars.css"
import {
    AiFillHome,
    AiOutlineRise,
    AiOutlineStock,
    AiFillDollarCircle,
    AiOutlineUser,
    AiOutlineMessage,
    AiFillExclamationCircle,
    AiFillMail,
    AiOutlineBarChart,
    AiOutlineSwap,
    AiFillMedicineBox,
    AiTwotoneSkin
} from "react-icons/ai";

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='sidbar__wrapper'>

                <div className="sidebar__manu">
               <h4 className='Sidebasr__title' >Dashbord</h4>
                    <div className='sidebar__list'>
                    <li className='SidebarManu__item ' > <AiFillHome className='sidebar__icon'/> Home </li>
                        <li className='SidebarManu__item' > <AiOutlineStock className='sidebar__icon' /> Area chart</li>
                    <li className='SidebarManu__item'> <AiOutlineRise className='sidebar__icon'/> Line chart  </li>
                   
                    </div>
                </div>
                <div className="sidebar__manu">
               <h4 className='Sidebasr__title' >Quick Manu</h4>
                    <div className='sidebar__list'>
                    <li className='SidebarManu__item'> <AiOutlineUser className='sidebar__icon'/>  Pie Chart </li>
                    <li className='SidebarManu__item' > <AiTwotoneSkin  className='sidebar__icon'/> Bar </li>
                    <li className='SidebarManu__item'> <AiFillDollarCircle className='sidebar__icon'/> Line </li>
                    <li className='SidebarManu__item'> <AiFillExclamationCircle className='sidebar__icon'/> Area  </li>
                    </div>
                </div>
                <div className="sidebar__manu">
               <h4 className='Sidebasr__title' >Notificatons</h4>
                    <div className='sidebar__list'>
                    <li className='SidebarManu__item'> <AiFillMail className='sidebar__icon'/>  Pie </li>
                    <li className='SidebarManu__item' > <AiOutlineSwap className='sidebar__icon'/> Feedback </li>
                    <li className='SidebarManu__item'> <AiOutlineMessage className='sidebar__icon'/> Message</li>
                    </div>
                </div>  
                <div className="sidebar__manu">
               <h4 className='Sidebasr__title' >Staff</h4>
                    <div className='sidebar__list'>
                        <li className='SidebarManu__item'> <AiFillMedicineBox className='sidebar__icon'/> Manage</li>
                    <li className='SidebarManu__item' > <AiOutlineBarChart className='sidebar__icon'/> Analatics </li>
                        
                    <li className='SidebarManu__item'> <AiFillExclamationCircle className='sidebar__icon'/> Reports</li>
                   
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;