 import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'

export const SideBarData = [
    {
        title: 'Home',
        path: '/admin',
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'Customers',
        path: '#',
        icon: <HiIcons.HiUsers />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
        {
        title : 'View Customers',
        path : '/admin/viewcustomers',
        icon : <FaIcons.FaUserEdit />,
        },
    ]
    },
    {
        title: 'Companies',
        path: '#',
        icon: <HiIcons.HiUsers />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
        title :  'Add Companies',
        path :  '/admin/addcompany',
        icon :  <AiIcons.AiFillShop />, 
        },
        {
        title : 'View Companies',
        path : '/admin/viewcompanies',
        icon : <AiIcons.AiOutlineFileAdd />,
        },
    ]
    },
    {
        title: 'Orders',
        path: '#',
        icon: <BsIcons.BsFillBagFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
        {
        title : 'View Current Orders',
        path : '/admin/vieworders',
        icon : <BsIcons.BsFillCartFill />,
        },
        {
        title : 'View Successful Orders',
        path : '/admin/viewsuccessorders',
        icon : <BsIcons.BsFillCartFill />,
        },
    ]
    },
    {
        title: 'Stocks',
        path: '#',
        icon: <FaIcons.FaBox />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
        {
        title : 'Add  Stocks',
        path : '/admin/addstock',
        icon : <BsIcons.BsFillCartFill />,
        },
        {
        title : 'View  Stock',
        path : '/admin/viewstock',
        icon : <BsIcons.BsFillCartFill />,
        },
        {
         title : 'Expired  Stock',
         path : '/admin/viewexpiredstock',
         icon : <BsIcons.BsFillCartFill />,
         },
    ]
    },


]