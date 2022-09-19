import React, {FC} from 'react';
import './Hello.pcss';
import {Version} from "./Version";
import {User} from "./User";
import {Store2Provider} from './store/useStore2';
import {Store1Provider} from './store/useStore1';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <Store1Provider>
        <Store2Provider>
            <Version/>
            <User/>
        </Store2Provider>
    </Store1Provider>;
}
