import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

@observer
export default class Header extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Retrieve the device width. */
        const deviceWidth = this.store.device.width

        return <div id="container" style={ styles.container }>
      		<div class="row align-items-center">
	      		<div class="col-6 mt-1 ml-3">
                    {/* TODO Move all images to IPFS */}
                    <NavLink to="/">
		          	    <img style={ this.store.device.isPhone ? styles.logoImgPhone : styles.logoImg } src="images/logo0bit.png" />
                    </NavLink>
                    <div class="mt-1">{ this.accountLinks(deviceWidth) }</div>
	      		</div>

	      		<div class="col-5 text-right" style={ styles.navLinks }>
                    <div class="mt-1">
                        <div class="btn-group dropleft">
                            <button type="button" class="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu &nbsp;<FontAwesome name='bars' />
                            </button>

                            <div class="dropdown-menu">
                                <NavLink to="/" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='sitemap' style={ styles.menuIcon } /> Districts
                                    </button>
                                </NavLink>

                                <NavLink to="/news" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='calendar' style={ styles.menuIcon } /> Daily News
                                    </button>
                                </NavLink>

                                <NavLink to="/msgs" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='comments' style={ styles.menuIcon } /> Messaging
                                    </button>
                                </NavLink>

                                <NavLink to="/screener" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='exclamation-triangle' style={ styles.menuIcon } /> Screener
                                    </button>
                                </NavLink>

                                <div class="dropdown-divider"></div>

                                <NavLink to="/coins" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <strong><FontAwesome name='btc' />uy <span class="text-warning">Gold</span> Coins</strong>
                                    </button>
                                </NavLink>

                                <div class="dropdown-divider"></div>

                                <NavLink to="/account" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='id-card' style={ styles.menuIcon } /> My Account
                                    </button>
                                </NavLink>

                                <NavLink to="/favs" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='star' style={ styles.menuIcon } /> Favorites
                                    </button>
                                </NavLink>

                                <NavLink to="/help" style={ styles.menuItem }>
                                    <button class="dropdown-item" type="button">
                                        <FontAwesome name='support' style={ styles.menuIcon } /> Need help?
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div class="mt-1">
                        <NavLink to="/new-post">
                            <button type="submit" class="btn btn-outline-secondary">
                                Post ad &nbsp;<FontAwesome name='bullhorn' />
                            </button>
                        </NavLink>
                    </div>
	      		</div>
      		</div>
      	</div>
    }

    accountLinks(deviceWidth) {
        if (this.store.eth.accounts[0])
            return <div style={ (deviceWidth <= 480) ? styles.accountAddr_480 : styles.accountAddr }>
                <small>You are signed in</small> [ <NavLink to="/signout">sign out</NavLink> ]<br />
            <NavLink to="/account">{ this.store.addressDisplay }</NavLink>
            </div>
        else
            return <div style={ (deviceWidth <= 480) ? styles.accountLinks_480 : styles.accountLinks }>
                <NavLink to="/signin"><button class="btn btn-light btn-sm">Sign in to your account</button></NavLink>
            </div>
    }
}

/* Initialize stylesheet. */
const styles = {
  	container: {
  		// color: '#3563a8',
    	fontSize: '1.1em',
    	fontWeight: 'bold',

  		borderBottom  : '2px solid #3563a8',
  		marginBottom  : '1em',
    	paddingBottom : '0.5em',
  	},
    logoImg: {
        width: '265px'
    },
    logoImgPhone: {
        width: '200px'
    },
  	navLinks: {
    	fontSize: '1.2em'
  	},
    accountAddr: {
        fontSize: '0.8em'
    },
    accountAddr_480: {
        fontSize: '0.75em'
    },
    accountLinks: {
        fontSize: '1.1em'
    },
    accountLinks_480: {
        fontSize: '0.7em',
        marginTop: '5px'
    },
    menuItem: {
        textDecoration: 'none'
    },
    menuIcon: {
        width: '25px',
        textAlign: 'center'
    }
}
