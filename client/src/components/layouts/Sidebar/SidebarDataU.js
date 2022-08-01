import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
// import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import LoginU from '../../auth/LoginU'


export const SideBarData = [
    
    {
        title: 'Home',
        path: `/user`,
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'My profile',
        path: `/user/viewdetails/:username`,
        icon: <BsIcons.BsFillPersonFill />,
    },
    {
        title: 'Buy',
        path: '/user/buyitems',
        icon: <BsIcons.BsFillBagFill />,
    },
    {
        title: 'Orders',
        path: '/user',
        icon: <BsIcons.BsCartFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
        title :  'Previous Orders',
        path :  '/user/previousorders',
        icon :  <BsIcons.BsCartCheckFill />,
        },
        {
        title : 'Order Status',
        path : '/user/ordrestatus',
        icon : <BsIcons.BsCartDashFill />,
        },
    ]
    },
    {
        title: 'About Us',
        path: '/user/About',
        icon: <BsIcons.BsFillInfoCircleFill />,
    },

]