import React from 'react'

function Profile(props){
    console.log(props)
    const {profileProps} = props;
    console.log(profileProps);
    return(
        <div className="ul list">
            <div className="item">
                <img  className="ui avatar image" src={props.profileToPass.img} alt=""/>
                <div className="content">
                <a href='/' className="header">
                    {props.profileToPass.name}
                </a>
                <div className="description">{props.profileToPass.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile