import { NavBarStyles } from './styles'

export const NavBar = () =>{
    return(
        <NavBarStyles>
            <div className='navContainer'>
                <div className='logo'>
                    <img src="./powerade-logo.png" alt="" />
                </div>
            </div>
        </NavBarStyles>
    )
}