import React, {Component} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


class Header extends Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render(){
        return (
            <div className="header">
                <div className="header__left">
                    <MenuIcon/>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
                </div>
               
                <form className="header__input" onSubmit={this.handleSubmit}>
                    <input name="search" type="text" placeholder="Search" onChange={this.handleChange} />
                    <SearchIcon className="header__inputButton" onClick="submit"/>
                </form>                    
                
                <div className="header__icons">
                    <VideoCall className="header__icon"/>
                    <AppsIcon className="header__icon"/>
                    <NotificationsIcon className="header__icon"/>
                    <Avatar src="https://www.belloflostsouls.net/wp-content/uploads/2012/04/kay-templar-01.jpg"/>
                </div>            
            </div>
        )
    }
    
}

export default Header;
