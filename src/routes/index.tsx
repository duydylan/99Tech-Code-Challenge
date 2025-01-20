import Loading from '@/components/Loading';
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router';
import { PATH_MAIN, PATH_OTHER } from './paths';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Loading isFull={true} />}>
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    return useRoutes([
        {
            path: PATH_MAIN.HOME,
            element: <MainLayout />,
            children: [
                {
                    path: PATH_MAIN.HOME,
                    element: <HomePage />,
                },
                {
                    path: PATH_MAIN.PROBLEM.ONE,
                    element: <ProblemOne />,
                },
                {
                    path: `${PATH_MAIN.PROBLEM.TWO}/:codeFrom/:codeTo`,
                    element: <ProblemTwo />,
                },
                {
                    path: PATH_MAIN.PROBLEM.THREE,
                    element: <ProblemThree />,
                },
            ],
        },
        // Other
        {
            path: PATH_OTHER.NOT_FOUND,
            element: <NotFound />,
        },
        {
            path: '*',
            element: <Navigate to={PATH_OTHER.NOT_FOUND} replace />,
        },
    ]);
};

// Main
const MainLayout = Loadable(lazy(() => import('@/layouts/Main')));
const HomePage = Loadable(lazy(() => import('@/pages/main/Home')));
const ProblemOne = Loadable(lazy(() => import('@/pages/main/problems/One')));
const ProblemTwo = Loadable(lazy(() => import('@/pages/main/problems/Two')));
const ProblemThree = Loadable(lazy(() => import('@/pages/main/problems/Three')));

// Other
const NotFound = Loadable(lazy(() => import('@/pages/NotFound')));

export default Router;
