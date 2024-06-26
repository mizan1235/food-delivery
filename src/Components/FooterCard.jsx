import React from 'react'

const FooterCard = () => {
    return (
        <div>
            <div className='footer_header'>
                <div className='footer'>
                    <div className='footer-item'>
                        <div className='item-1'>Terms & Conditions</div>
                        <div className='item-1'>Privacy Policy</div>
                        <div className='item-1'>Contact Us</div>
                    </div>
                    <div className='footer-item'>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100020495491917" target="_blank" rel="noopener noreferrer">
                                <img src="../../Images/Facebook.jpeg" alt="Facebook" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            <a href="https://www.instagram.com/mizanuranr/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src="../../Images/instragram.jpeg" alt="Instagram" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/mizanur-rahman-66b806248/" target="_blank" rel="noopener noreferrer">
                                <img src="../../Images/linkedin.jpeg" alt="linkedin" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            {/* <a href="https://www.facebook.com/profile.php?id=100020495491917" target="_blank" rel="noopener noreferrer"> */}
                            <img src="../../Images/twitter.jpeg" alt="twiter" className='footer-image' />
                            {/* </a> */}

                        </div>
                        <div>
                            <a href="https://t.me/mizanuranr" target="_blank" rel="noopener noreferrer">
                                <img src="../../Images/telegram.jpeg" alt="telegram" className='footer-image' />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:whitedevil1jdk@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../Images/email.jpeg" alt="email" className='footer-image' />
                            </a>

                        </div>
                    </div>

                </div>
                <div className='copyright'>
                    <p>&copy; Copyright 2024 </p>

                </div>
            </div>
        </div>
    )
}

export default FooterCard