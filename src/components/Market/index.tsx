import { uniqueId } from "lodash";
import React, { useState } from "react";
import MarketList from "./MarketList";
import MarketResume from "./MarketResume";
import NewMarketItemForm from "./NewMarketItemForm";
import * as S from "./styles/style";

export interface MarketListItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  session?: string;
}

export default function Market() {
  const [marketList, setMarketList] = useState<MarketListItem[]>([]);

  const concatNewItems = (newItems: MarketListItem[]) =>
    setMarketList((oldList) => oldList.concat(newItems));

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <>
      <S.Container>
        <NewMarketItemForm
          modalState={modalOpened}
          controlModalFunction={setModalOpened}
          addNewItems={concatNewItems}
        />
        <S.Flex>
          <MarketList marketList={marketList} />
          <MarketResume marketList={marketList} />
        </S.Flex>
      </S.Container>
    </>
  );
}
