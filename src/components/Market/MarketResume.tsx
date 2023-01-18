import React from "react";
import styled from "styled-components";
import { MarketListItem } from ".";

interface MarketResumeProps {
  marketList: MarketListItem[];
}

const Container = styled.div`
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  background-color: #00000016;
`;

const ResumeTitle = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  font-weight: 300;
  border-bottom: 1px solid #999;
`;

export default function MarketResume({ marketList }: MarketResumeProps) {
  return (
    <Container>
      <ResumeTitle>Resumo de compas</ResumeTitle>
    </Container>
  );
}
