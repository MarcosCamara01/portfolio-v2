import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";

export const SocialMedia = () => {
    return (
        <div className='socialmedia'>
            <ul>
                <li><a href="https://github.com/MarcosCamara01" target="_blank"><FiGithub /></a></li>
                <li><a href="#"><FiInstagram /></a></li>
                <li><a href='./pdf/CurriculumVitae.pdf' target="_blank"><span>CV</span></a></li>
                <li><a href="https://www.linkedin.com/in/marcospenelascamara/" target="_blank"><FiLinkedin /></a></li>
                <li><a href="https://codepen.io/MarcosPenelas" target="_blank"><FiCodepen /></a></li>
            </ul>
        </div>
    )
}
