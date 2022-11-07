import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { decrement, increment } from './counterSlice';

import { RootState } from '../App/store';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledDiv color={'yellow'}>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </StyledDiv>
    </div>
  );
}
const StyledDiv = styled.div`
  color: red;
  background-color: ${(props) => props.color};
  width: 100px;
  height: 200px;
`;
