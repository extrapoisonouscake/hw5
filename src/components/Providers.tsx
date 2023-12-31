"use client";

/* Core */
import {Provider} from "react-redux";

/* Instruments */
import store from "@/store";

export const Providers = (props: React.PropsWithChildren) => <Provider store={store}>{props.children}</Provider>;
