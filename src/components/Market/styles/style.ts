import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
`;

export const ContainerMarketList = styled.div`
  min-width: 22rem;
  margin-right: 2rem;
  padding: 18px;
  background-color: #faec91;
  border-radius: 0px 14px 0px 14px;
  box-shadow: 0px 4px 8px -2px #999;
`;

export const MarketListTitle = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  font-weight: 300;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;
`;

export const MarketSessionTitle = styled.h4`
  margin: 0;
  margin-top: 18px;
  margin-bottom: 8px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

export const MarketListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`;
