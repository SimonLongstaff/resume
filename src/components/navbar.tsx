import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {useState} from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: sticky;
  z-index: 99;
  top: 0;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    padding: 0 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #f7df1e;
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #333;
  padding: 10px;
  display: ${({open}) => (open ? "block" : "none")};

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    padding: 10px 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
  }
`;

const GithubButton = styled.a`
  background-color: rgba(255, 255, 255, 0);
  color: #333;
  border: 1px solid #333;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Nav>
            <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>
            <ul>
                <li>
                    <a href="#home">Top</a>
                </li>
                <li>
                    <a href="#profile">About</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#work-experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#extra-circular">Extra Circular</a>
                </li>
            </ul>
            <MobileMenu open={menuOpen}>
                <ul>
                    <li>
                        <a href="#home">Top</a>
                    </li>
                    <li>
                        <a href="#profile">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#work-experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#extra-circular">Extra Circular</a>
                    </li>
                </ul>
            </MobileMenu>

            <GithubButton href="https://github.com/SimonLongstaff">
                <AiFillGithub className={"inline-block text-2xl"}/>
            </GithubButton>

            
        </Nav>
    );
}

export default Navbar;