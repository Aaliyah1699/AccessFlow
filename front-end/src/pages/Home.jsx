/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main.svg';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
function Home() {
    const { user } = useGlobalContext();
    return (
        <>
            {user && <Navigate to='/dashboard' />}
            <Wrapper className='page'>
                <div className='info'>
                    <h2>
                        <span>Auth</span>
                        Workflow
                    </h2>
                    <p>
                        I'm baby viral enamel pin Pellentesque eu tincidunt
                        tortor aliquam nulla facilisi cras fermentum. Quis enim
                        lobortis scelerisque fermentum dui. Eget nulla facilisi
                        etiam dignissim diam quis.
                    </p>
                    <p>
                        Cloud bread kale chips wayfarers Elementum pulvinar
                        etiam non quam lacus suspendisse faucibus. Fames ac
                        turpis egestas maecenas. Elit ullamcorper dignissim cras
                        tincidunt lobortis. Senectus et netus et malesuada fames
                        ac turpis.
                    </p>

                    <Link to='/login' className='btn'>
                        Login
                    </Link>
                    <Link to='/register' className='btn'>
                        Register
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    h2 {
        font-weight: 700;
    }
    h2 span {
        color: var(--primary-500);
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 6rem;
        .main-img {
            display: block;
        }
    }
    .btn {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
`;

export default Home;
