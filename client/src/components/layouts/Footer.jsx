import React from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import { mdiCommentQuestionOutline } from '@mdi/js';
import { mdiCubeOutline } from '@mdi/js';
import { mdiCardBulletedOutline } from '@mdi/js';
import { mdiGiftOutline } from '@mdi/js';
import { mdiWrench } from '@mdi/js';
import { mdiCellphoneAndroid } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import { mdiFacebookBox } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiPinterest } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';

export default function Footer(props) {
    return (
        <div>
            <div className="footerGroup">
            <div className="colgil">
                <ul className="colgilList">
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Contact Us">
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiCommentQuestionOutline}
                                            title="Contact Us"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Contact Us</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Order Status" >
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiCubeOutline}
                                            title="Order Status"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Order Status</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Hallowe's Credit Cards">
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiCardBulletedOutline}
                                            title="Hallowe's Credit Cards"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Hallowe's Credit Cards</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Gift Cards">
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiGiftOutline}
                                            title="Gift Cards"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Gift Cards</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Installation Services">
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiWrench}
                                            title="Installation Services"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Installation Services</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a className="linkTo" href="#" title="Hallowe's Apps">
                            <div className="media">
                                <div className="colgilSpacing">
                                    <span className="colgilBubble">
                                        <Icon path={mdiCellphoneAndroid}
                                            title="Hallowe's Apps"
                                            size="18px"
                                            color= "#0471AF"
                                        />
                                    </span>
                                </div>
                                <div >Hallowe's Apps</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="footerHR"></hr>
            <div className="siteNav">
                <div className="siteNavCol">
                    <div >
                        <h3 className="siteNavColTitle" id="offTitle">ABOUT HALLOWE'S</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Company Overview
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Careers
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Investor Relations
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Newsroom
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Corporate Responsibility
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Hallowe's Suppliers
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Affiliate Program
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="siteNavCol">
                    <div >
                        <h3 className="siteNavColTitle">STORES &amp; SERVICES</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Find a Store
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Store Directory
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Brand Directory
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">In-Store Services
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Hallowe's For Pros
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Hallowe's Canada
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Site Directory
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="siteNavCol">
                    <div >
                        <h3 className="siteNavColTitle">CUSTOMER SERVICE</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Rebates
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Returns &amp; Exchanges
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Shipping &amp; Delivery
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo" href="#">Special Orders
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo"  href="#">Recalls &amp; Product Safety
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo"  href="#">Protection Plans
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="linkTo"  href="#">Military Discount
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="siteContact">
                    <div className="siteContactCol">
                    
                        <div className="contactEmail">
                            <div className="signup">
                                <h3 className="siteContactColTitle">BE THE FIRST TO KNOW</h3>
                                <p id="email">
                                    <a className="linkTo" href="#" title="Sign up for Emails">
                                        <Icon path={mdiEmailOutline} id="emailIcon"
                                                title="Contact Us"
                                                size="14px"
                                                color= "#0471AF"
                                        /> Sign up for Emails
                                    </a> to get exclusive offers, tips and more.
                                </p>
                            </div>

                        </div>
                        <div className="contactConnect">
                            <div>
                                <h3 className="siteContactColTitle">CONNECT WITH US</h3>
                                <div>
                                    <ul className="connectIconList">
                                        <li className="connectIconListItem">
                                            <a className="linkTo" href="https://www.facebook.com" title="Facebook">
                                                <span>
                                                    <Icon path={mdiFacebookBox}
                                                        size="26px"
                                                        color= "#0471AF"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="connectIconListItem">
                                            <a className="linkTo" href="https://www.twitter.com" title="Twitter">
                                                <span>
                                                    <Icon path={mdiTwitter}
                                                        size="26px"
                                                        color= "#0471AF"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="connectIconListItem">
                                            <a className="linkTo" href="https://www.pinterest.com" title="Pinterest">
                                                <span>
                                                    <Icon path={mdiPinterest}
                                                        size="26px"
                                                        color= "#0471AF"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="connectIconListItem">
                                            <a className="linkTo" href="https://www.instagram.com" title="Instagram">
                                                <span>
                                                    <Icon path={mdiInstagram}
                                                        size="26px"
                                                        color= "#0471AF"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="connectIconListItem">
                                            <a className="linkTo" href="https://www.youtube.com" title="Youtube">
                                                <span>
                                                    <Icon path={mdiYoutube}
                                                        size="26px"
                                                        color= "#0471AF"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="contactHelp">
                            <div>
                                <div>
                                    <h3 className="siteContactColTitle">NEED HELP? 
                                        <a className="linkTo" href="#" id="contactus"> Contact Us</a>
                                    </h3>
                                </div>
                                <p className="hoursInfo">
                                    Mon - Sat: 8 a.m. - 10 p.m. (ET)
                                </p>
                                <p className="hoursInfo">
                                    Sun: 8 a.m. - 9 p.m. (ET)
                                </p>
                                <div>
                                    <p className="hoursInfo">
                                        Text: <a className="linkTo" href="#" id="dividerCon">84109</a> Call: <a className="linkTo" href="#">1-800-445-6937</a>
                                    </p>
                                </div>
                                <p className="hoursInfo">(Messaging and data rates apply.)</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
                <div className="termsParent">
                    <div className="terms">
                        <ul className="termsList">
                            <li className="termsListItem">
                                <a className="linkTo" href="#">
                                    Terms
                                </a>
                            </li>
                            <li className="termsListItem">
                            <a className="linkTo" href="#">
                                    Privacy Statement
                                </a>
                            </li>
                            <li className="termsListItem">
                                <a className="linkTo" href="#">
                                    CA Privacy Rights
                                </a>
                            </li>
                            <li className="termsListItem">
                                <a className="linkTo" href="#">
                                    Interest-Based Ads
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="copyright"> 
                    ©  2019 Hallowe's. All rights reserved maybe. Hallowe's and the Mario Design are not registered trademarks of LF, LLC.
                </p>
            </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Footer />, document.getElementById("foot"));