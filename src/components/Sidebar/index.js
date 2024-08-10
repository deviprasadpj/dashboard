import './index.css'
import { MdHomeRepairService, MdKeyboardArrowRight } from "react-icons/md";
import { PiCashRegisterFill, PiUsersBold } from "react-icons/pi";
import { HiDocumentSearch } from "react-icons/hi";
import { BsGlobe2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1> Bare Kaab </h1>
            <ul className='list-menu'>
                <li><MdHomeRepairService className='icon-space' />Government Overview <MdKeyboardArrowRight className='arrow-icon'/></li>
                <li><PiCashRegisterFill className='icon-space'/>Institute Registry <MdKeyboardArrowRight /></li>
                <li><HiDocumentSearch className='icon-space'/>Academics <MdKeyboardArrowRight /></li>
                <li><PiUsersBold className='icon-space'/>Institute Inspection <MdKeyboardArrowRight /></li>
                <li><HiDocumentSearch className='icon-space'/>Raise a Ticket <MdKeyboardArrowRight /></li>
                <li><BsGlobe2 className='icon-space'/>Communication <MdKeyboardArrowRight /></li>
                <li><CgProfile className='icon-space'/>Profile <MdKeyboardArrowRight /></li>
            </ul>
        </div>
    )

}

export default Sidebar