import { Div } from '@/designs/common/Div';
import { Container } from '@/designs/common/Container';
import { DEFAULT_PROBLEM_TWO_PATH } from '@/models/constants';
import { PATH_MAIN } from '@/routes/paths';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <Link to={PATH_MAIN.PROBLEM.ONE}>Problem One</Link>,
        key: PATH_MAIN.PROBLEM.ONE,
    },
    {
        label: <Link to={DEFAULT_PROBLEM_TWO_PATH}>Problem Two</Link>,
        key: 'convert',
    },
    {
        label: <Link to={PATH_MAIN.PROBLEM.THREE}>Problem Three</Link>,
        key: PATH_MAIN.PROBLEM.THREE,
    },
];

const Header = () => {
    const { pathname } = useLocation();

    const activeKey = pathname.includes('convert') ? 'convert' : pathname;

    return (
        <Div>
            <Container>
                <Menu selectedKeys={[activeKey]} mode="horizontal" items={items} />
            </Container>
        </Div>
    );
};

export default Header;
