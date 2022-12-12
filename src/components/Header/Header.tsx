import React from 'react'
import './Header.scss'
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import Form from '../Form/Form'



type Props = {}

const Header = (props: Props) => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header_logo'>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className='header_title'>React weather</div>
      </div>
      <div className='wrapper'>
        <div className='change_theme' onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Form />
      </div>
    </header>
  )
};

export default Header;
