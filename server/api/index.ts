import { createRouter } from 'h3';

const router = createRouter();

router.get('/', event => {
    return {
        msg: 'Hello World'
    };
});

export default useBase('/api', router.handler);
