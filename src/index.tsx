import './index.css';
import 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './tippy-modal.css';
import React from 'react';
import {Hello} from "./Hello";
import ReactDOM from 'react-dom';

const button = document.querySelector("#main button");
tippy(button!, {
        maxWidth: 1000000,
        interactive: true,
        trigger: 'click',
        onCreate: (instance) => {
            ReactDOM.render(
                <Hello onExpand={(expand) => {
                    instance.setProps({})
                }}/>,
                instance.popper.querySelector('.tippy-content')
            )
        }
    }
);
