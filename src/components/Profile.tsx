import { Avatar } from './Avatar'
import back from './../assets/svg/back.svg'
import menu from './../assets/svg/menu.svg'
import add from './../assets/svg/add.svg'
import ava from './../assets/images/my-ava.jpeg'
import img1 from './../assets/images/image1.jpeg'
import img2 from './../assets/images/image2.jpeg'
import img3 from './../assets/images/image3.jpeg'
import img4 from './../assets/images/image4.jpeg'
import img5 from './../assets/images/image5.jpeg'
import img6 from './../assets/images/image6.jpeg'
import img8 from './../assets/images/image8.jpeg'
import img9 from './../assets/images/image9.jpeg'
import friend1 from './../assets/images/friend1.jpeg'
import friend2 from './../assets/images/friend2.jpeg'
import friend3 from './../assets/images/friend3.jpeg'
import friend4 from './../assets/images/friend4.jpeg'
import { Media } from './Media'
import { FriendItem } from './FriendItem'
import Button from '@material-ui/core/Button'
export const Profile = () => (
    <div className='profile'>
        <div className='header'>
            {<img src={back} alt='back' />}
            <h2>Profile</h2>
            {<img src={menu} alt='menu' />}
        </div>
        <hr />
        <div className='content'>
            <Avatar src={ava} />
            <div className='nickname center'>Ri4an</div>
            <div className='hobby center'>Developer</div>
            <hr />
            <h3>Friends</h3>
            <div className='friends'>
                <FriendItem nickname='George Corey' job='Developer' avatar={friend1} />
                <FriendItem nickname='Ahmad Vetrovs' job='Developer' avatar={friend4} />
                <FriendItem
                    nickname='Cristofer Workman'
                    job='Developer'
                    avatar={friend2}
                />
                <FriendItem
                    nickname='Tiana Korsgaard'
                    job='Developer'
                    avatar={friend3}
                />
                <Button className='btn-add'>
                    ADD FRIEND <img src={add} alt='add' />
                </Button>
            </div>
            <h3>Media</h3>
            <div className='media'>
                <Media src={ava} />
                <Media src={img1} />
                <Media src={img2} />
                <Media src={img3} />
                <Media src={img4} />
                <Media src={img5} />
                <Media src={img6} />
                <Media src={img9} />
                <Media src={img8} />
                <Button className='btn-delete'>DELETE</Button>
                <Button className='btn-add-2'>ADD</Button>
            </div>
        </div>
        <div className='footer'></div>
    </div>
)
