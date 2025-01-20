// ----------------------------------------------------------------------

const path = (root: string, subLink: string) => {
    return `${root}${subLink}`;
};

const ROOT = '/99tech-code-challenge-frontend-duyduong';
const ROOT_PROBLEM = `${ROOT}/problem`;

// ----------------------------------------------------------------------

export const PATH_MAIN = {
    HOME: ROOT,
    PROBLEM: {
        SELF: ROOT_PROBLEM,
        ONE: path(ROOT_PROBLEM, '/one'),
        TWO: path(ROOT, '/convert'),
        THREE: path(ROOT_PROBLEM, '/three'),
    },
};
export const PATH_OTHER = {
    NOT_FOUND: '/not-found',
};
