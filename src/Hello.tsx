import {css} from "@emotion/css";
import React, {FC, useEffect, useState} from "react";

interface Props {
    onExpand: (expand: boolean) => void
}

export const Hello: FC<Props> = ({onExpand}) => {
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        onExpand(expand)
    }, [expand]);

    return <div className={css`
      background-color: gray;
      width: ${expand ? '80vw' : 'auto'};
      height: ${expand ? '80vh' : 'auto'};
    `}>
        <button onClick={(event) => {
            setExpand(v => !v)
            event.stopPropagation();
        }}>
            {expand
                ? <div>&gt;&lt;</div>
                : <div>&lt;&gt;</div>
            }
        </button>
    </div>
}