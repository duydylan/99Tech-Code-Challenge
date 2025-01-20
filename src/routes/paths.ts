// ----------------------------------------------------------------------

const path = (root: string, subLink: string) => {
    return `${root}${subLink}`;
};

const ROOT_PROBLEM = '/problem';

// ----------------------------------------------------------------------

export const PATH_MAIN = {
    HOME: '/',
    PROBLEM: {
        SELF: ROOT_PROBLEM,
        ONE: path(ROOT_PROBLEM, '/one'),
        TWO: '/convert',
        THREE: path(ROOT_PROBLEM, '/three'),
    },
};
export const PATH_OTHER = {
    NOT_FOUND: '/not-found',
};
