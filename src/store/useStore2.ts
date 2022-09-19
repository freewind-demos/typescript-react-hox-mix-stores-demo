import {useState} from 'react';

import {createStore} from 'hox';

export const [useStore2, Store2Provider] = createStore(() => {
    const [version, setVersion] = useState(0)
    return {version, setVersion}
});
