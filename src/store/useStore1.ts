import {useState} from 'react';

import {createStore} from 'hox';
import {useStore2} from "./useStore2";


export const [useStore1, Store1Provider] = createStore(() => {
    const [user, setUser] = useState<string>();
    const {version} = useStore2();

    return {user, setUser: (user: string) => setUser(`${user}.${version}`)}
});
