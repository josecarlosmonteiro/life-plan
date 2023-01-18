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

  const [showModal, setShowModal] = useState(false);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const handleShowModal = (state: boolean) => {
    setShowModal(true);
    setModalOpened(state);
  };

  return (
    <>
      <S.Container>
        <div>
          <button
            style={{ margin: "12px 0px 22px", padding: 8 }}
            onClick={() => handleShowModal(true)}
          >
            Add produto(s)
          </button>
        </div>
        {showModal && (
          <NewMarketItemForm
            modalState={modalOpened}
            controlModalFunction={(state: boolean) => handleShowModal(state)}
            addNewItems={concatNewItems}
          />
        )}
        <S.Flex>
          <MarketList marketList={marketList} />
          <MarketResume marketList={marketList} />
        </S.Flex>
      </S.Container>
    </>
  );
}
