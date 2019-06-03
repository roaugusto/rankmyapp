import React, { Component } from 'react';

class Header extends Component {

    state = {
        collapsed: true,
        popoverOpen: false,
        isSignedIn: true,
        dropdownOpen: false,
        image: '',
    }

    componentDidMount = () => {

    }

    toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });
    togglePopover = () => this.setState({ popoverOpen: !this.state.popoverOpen });

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {

        const collapsed = this.state.collapsed;
        const classCollapseOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classCollapseTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <div className="p-1">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src="https://www.rankmyapp.com/wp-content/uploads/2018/04/rankmyapp-logo-hor-1-1.jpg" alt="logo" />
                    </a>
                    <button onClick={this.toggleNavbar} className={`${classCollapseTwo}`}
                        type="button" data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className={`${classCollapseOne}`} id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link header" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Header


