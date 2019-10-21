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
            <div className="colgil">
                <ul className="colgilList">
                    <li className="colgilItem">
                        <a href="#" title="Contact Us">
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
                                <div className="">Contact Us</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a href="#" title="Order Status" >
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
                                <div className="">Order Status</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a href="#" title="Hallowe's Credit Cards">
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
                                <div className="">Hallowe's Credit Cards</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a href="#" title="Gift Cards">
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
                                <div className="">Gift Cards</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a href="#" title="Installation Services">
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
                                <div className="">Installation Services</div>
                            </div>
                        </a>
                    </li>
                    <li className="colgilItem">
                        <a href="#" title="Hallowe's Apps">
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
                                <div className="">Hallowe's Apps</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="footerHR"></hr>
            <div className="siteNav">
                <div className="siteNavCol">
                    <div className="">
                        <h3 className="siteNavColTitle" tabindex="0" id="offTitle">ABOUT HALLOWE'S</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="" href="#">Company Overview
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Careers
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Investor Relations
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Newsroom
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Corporate Responsibility
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Hallowe's Suppliers
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Affiliate Program
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="siteNavCol">
                    <div className="">
                        <h3 className="siteNavColTitle" tabindex="0">STORES &amp; SERVICES</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="" href="#">Find a Store
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Store Directory
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Brand Directory
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">In-Store Services
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Hallowe's For Pros
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Hallowe's Canada
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Site Directory
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="siteNavCol">
                    <div className="">
                        <h3 className="siteNavColTitle" tabindex="0">CUSTOMER SERVICE</h3>
                        <ul>
                            <li className="siteNavColList">
                                <a className="" href="#">Rebates
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Returns &amp; Exchanges
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Shipping &amp; Delivery
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Special Orders
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Recalls &amp; Product Safety
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Protection Plans
                                </a>
                            </li>
                            <li className="siteNavColList">
                                <a className="" href="#">Military Discount
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
                                <h3 className="siteContactColTitle" tabindex="0">BE THE FIRST TO KNOW</h3>
                                <p tabindex="0" id="email">
                                    <a href="#" title="Sign up for Emails">
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
                                <h3 className="siteContactColTitle" tabindex="0">CONNECT WITH US</h3>
                            </div>
                        </div>
                        <div className="contactHelp">
                            <div>
                                <h3 className="siteContactColTitle" tabindex="0">NEED HELP?</h3>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
                <div className="termsParent">
                    <div className="terms">
                        <ul className="termsList">
                            <li className="termsListItem">
                                <a href="#">
                                    Terms
                                </a>
                            </li>
                            <li className="termsListItem">
                            <a href="#">
                                    Privacy Statement
                                </a>
                            </li>
                            <li className="termsListItem">
                                <a href="#">
                                    CA Privacy Rights
                                </a>
                            </li>
                            <li className="termsListItem">
                                <a href="#">
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
    )
}

ReactDOM.render(<Footer />, document.getElementById("foot"));