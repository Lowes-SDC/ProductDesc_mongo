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
            <div>
            <ul class="">
                <li class="">
                    <a href="#" target="_self" title="Contact Us" data-linkid="contact_us">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiCommentQuestionOutline}
                                        title="Contact Us"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Contact Us</div>
                        </div>
                    </a>
                </li>
                <li class="">
                    <a href="#" target="_self" title="Order Status" data-linkid="order_status">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiCubeOutline}
                                        title="Order Status"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Order Status</div>
                        </div>
                    </a>
                </li>
                <li class="">
                    <a href="#" target="_self" title="Hallowe's Credit Cards" data-linkid="lowe_s_credit_cards">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiCardBulletedOutline}
                                        title="Hallowe's Credit Cards"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Hallowe's Credit Cards</div>
                        </div>
                    </a>
                </li>
                <div class=""></div>
                <li class="">
                    <a href="#" target="_self" title="Gift Cards" data-linkid="gift_cards">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiGiftOutline}
                                        title="Gift Cards"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Gift Cards</div>
                        </div>
                    </a>
                </li>
                <li class="">
                    <a href="#" target="_self" title="Installation Services" data-linkid="installation_services">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiWrench}
                                        title="Installation Services"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Installation Services</div>
                        </div>
                    </a>
                </li>
                <li class="">
                    <a href="#" target="_self" title="Hallowe's Apps" data-linkid="lowe_s_apps">
                        <div class="media">
                            <div class="">
                                <span class="">
                                    <Icon path={mdiCellphoneAndroid}
                                        title="Hallowe's Apps"
                                        size="18px"
                                    />
                                </span>
                            </div>
                            <div class="">Hallowe's Apps</div>
                        </div>
                    </a>
                </li>
                </ul>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div className="terms">
                    <ul class="list">
                        <li className="listItem">
                            <a href="#">
                                Terms
                            </a>
                        </li>
                        <li className="listItem">
                        <a href="#">
                                Privacy Statement
                            </a>
                        </li>
                        <li className="listItem">
                            <a href="#">
                                CA Privacy Rights
                            </a>
                        </li>
                        <li className="listItem">
                            <a href="#">
                                Interest-Based Ads
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="copyright"> 
                    ©  2019 Hallowe's. All rights reserved maybe. Hallowe's and the Mario Design are not registered trademarks of LF, LLC.
                </p>
            </div>
        </div>
    )
}

ReactDOM.render(<Footer />, document.getElementById("foot"));