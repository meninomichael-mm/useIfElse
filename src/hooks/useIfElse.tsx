import React, { ReactElement } from "react";

export function useIfElse(condition: boolean,
    trueChildren: ReactElement,
    falseChildren: ReactElement = <></>) {
    if (condition) {
        return trueChildren
    } else {
        return falseChildren
    }
}