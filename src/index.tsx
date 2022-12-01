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
        duration: 100,
        trigger: 'mouseenter',
        onClickOutside: (instance) => {
            instance.setProps({onHide: () => undefined})
            instance.hide();
        },
        onShow: (instance) => {
            instance.setProps({onHide: () => false})
        },
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
