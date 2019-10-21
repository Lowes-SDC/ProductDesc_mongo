import React from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import { mdiCommentQuestionOutline } from '@mdi/js';
import { mdiCubeOutline } from '@mdi/js';
import { mdiCardBulletedOutline } from '@mdi/js';
import { mdiGiftOutline } from '@mdi/js';
import { mdiWrench } from '@mdi/js';
import { mdiCellphoneAndroid } from '@mdi/js';

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
            <div className="placeholder">
            <p className="placeholder">Something</p>
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