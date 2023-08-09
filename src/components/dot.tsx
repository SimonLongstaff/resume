import styled from 'styled-components';

interface DotProps {
    isActive: boolean;
}

const Dot = styled.span<DotProps>`
  width: 10px;
  height: 10px;
  background-color: ${({isActive}) => (isActive ? '#333' : '#ccc')};
  border-radius: 50%;
  display: inline-block;
`;

export default Dot;