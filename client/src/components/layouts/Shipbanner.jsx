import React from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import { mdiCubeOutline } from '@mdi/js';
import { mdiCardBulletedOutline } from '@mdi/js';
import { mdiBookOpenPageVariant } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';

export default function Shipbanner(props) {
    return (
        <div className="ship">
            <p className="free">FREE SHIPPING ON HUNDREDS OF THOUSANDS OF ITEMS</p>
        </div>
    )
}

ReactDOM.render(<Shipbanner />, document.getElementById("shipping"));
