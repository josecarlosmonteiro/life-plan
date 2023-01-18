import styled, { keyframes } from "styled-components";

const openModal = keyframes`
  0% { transform: scaleY(.0025) scaleX(0) }
  50% { transform: scaleY(.0025) scaleX(1) }
  100% { transform: scaleY(1) scaleX(1) }
`;

const closeModal = keyframes`
  0% { transform: scaleY(1) scaleX(1) }
  50% { transform: scaleY(.0025) scaleX(1) }
  100% { transform: scaleY(.0025) scaleX(0) }
`;

interface ContainerModalProps {
  state?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000ad;
  animation: ${(props: ContainerModalProps) =>
      props.state ? openModal : closeModal}
    0.5s forwards;
`;

export const Form = styled.form`
  max-width: 690px;
  position: relative;
  top: -60px;
  padding: 22px;
  background-color: #e9e9e9;
  border-radius: 4px;
`;

export const FormTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-weight: 400;
  padding-bottom: 8px;
  border-bottom: 1px solid #bbb;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  flex-direction: column;
  justify-content: space-between;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > label {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  padding: 8px 2px;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: #f5f5f5;
  outline: none;
  transition: 150ms;

  &:focus {
    border-bottom-color: #00b;
  }
`;

export const NewItemsList = styled.div`
  max-width: 28em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const NewItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12.5rem;
  margin: 4px;
  padding: 8px;
  border-radius: 4px;
  color: #fff;
  background-color: #6565ff;
  cursor: pointer;
  transition: 150ms;
  :nth-child(3) {
    margin-right: 0;
  }

  &:hover {
    color: #333;
    background-color: #bfbfff;
  }
`;

export const FormBtn = styled.button`
  margin-left: 12px;
  padding: 4px;
`;
