import React from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import { mdiCubeOutline } from '@mdi/js';
import { mdiCardBulletedOutline } from '@mdi/js';
// import { mdiBookOpenPageVariant } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';

export default function Banner(props) {
    return (
            <div className="banner">
                <div className="indi" id='leftset'>
                    <p className="indi" id="starterTag">S.E. Austin Hallowe's</p>
                    <p className="fontban indi">Open till 10PM! &#x1F498;</p>
                </div>
                <div id='rightset'>
                    <div className="fontban indi" id="iconGroup">
                        <p className="fontban indi"><Icon  path={mdiCubeOutline}
                        size={0.7}
                        color="white"
                        /></p>

                        <p className="fontban indi" id="next2Icon">Order Status</p>
                    </div>

                    <div className="fontban indi" id="iconGroup">
                        <p className="fontban indi"><Icon path={mdiCardBulletedOutline}
                        size={0.7}
                        color="white"
                        /></p>

                        <p className="fontban indi" id="next2Icon"> Hallowe's Credit Cards</p>
                    </div>

                    <div className="fontban indi" id="iconGroup">
                        <p className="fontban indi"><Icon path={mdiBookOpenVariant}
                        size={0.7}
                        color="white"
                        /></p>

                        <p className="fontban indi" id="next2Icon"> Weekly Ad</p>
                    </div>
                    

                    

                    
                </div>
             </div>
    )
}

ReactDOM.render(<Banner />, document.getElementById("banner"));