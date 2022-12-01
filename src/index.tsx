import './index.css';
import 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import React from 'react';
import {Hello} from "./Hello";
import ReactDOM from 'react-dom';

tippy('button', {
        maxWidth: 'none',
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
