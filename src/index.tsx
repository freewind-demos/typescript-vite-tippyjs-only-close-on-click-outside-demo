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
        trigger: 'manual',
        placement: 'auto-end',
        onCreate: (instance) => {
            instance.reference.addEventListener('mouseenter', () => instance.show());
        },
        onShow: (instance) => {
            ReactDOM.render(
                <Hello key={Date.now()} onExpand={(expand) => {
                    instance.setProps({})
                }}/>,
                instance.popper.querySelector('.tippy-content')
            )
        },
    }
)
