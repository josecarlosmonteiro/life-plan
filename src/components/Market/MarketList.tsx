import { uniq } from "lodash";
import React from "react";
import { MarketListItem } from ".";
import {
  currency,
  getItemsBySession,
  getTotalListValue,
} from "./marketFunctions";
import * as S from "./styles/style";

interface MarketListProps {
  marketList: MarketListItem[];
}

export default function MarketList({ marketList }: MarketListProps) {
  const sessions = uniq(marketList.map((el) => el.session));

  return (
    <S.ContainerMarketList>
      <S.MarketListTitle>
        <span>Mercado</span>
        <span>{currency(getTotalListValue(marketList))}</span>
      </S.MarketListTitle>
      {!!marketList.length && (
        <>
          {sessions.map((session) => (
            <div key={session}>
              <S.MarketSessionTitle>
                <span>{session}</span>
                <span>
                  (
                  {session &&
                    currency(
                      getTotalListValue(getItemsBySession(marketList, session))
                    )}
                  )
                </span>
              </S.MarketSessionTitle>
              {session &&
                getItemsBySession(marketList, session).map(
                  (el: MarketListItem) => (
                    <S.MarketListItem key={el.id}>
                      <div>
                        {el.quantity}x {el.title}
                      </div>
                      <div>{currency(Number(el.price))}</div>
                    </S.MarketListItem>
                  )
                )}
            </div>
          ))}
        </>
      )}
    </S.ContainerMarketList>
  );
}
