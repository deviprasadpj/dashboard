import './index.css'
import { HiMenuAlt2,HiOutlineSearch  } from "react-icons/hi";
import { TbMessageCircle, TbScan } from "react-icons/tb";
import { IoMdNotificationsOutline} from "react-icons/io";


const Topbar = () => {
    return (
            <nav className='topbar'>
                <div className='topbar-left'>
                    <HiMenuAlt2 className='icon-space'/>
                    <div>
                        <HiOutlineSearch />
                        <input type="text" placeholder='Search here' className='search-bar' />
                    </div>
                </div>
                <div className='topbar-right'>
                    <div className="icons-container">
                        <TbMessageCircle className='icon-space icon-size-right'/>
                        <IoMdNotificationsOutline className='icon-space icon-size-right'/>
                        <TbScan className='icon-size-right' />
                    </div>
                    <div className='profile-details'>
                        <img src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png" className='profile-picture' alt="profile-picture"/>
                        <div className='title-container'>
                            <p className='title'>Super Admin</p>
                            <p className='description'>Admin@test.com</p>
                        </div>

                    </div>
                </div>
            </nav>
    )
}

export default Topbar