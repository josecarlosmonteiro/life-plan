import { MarketListItem } from ".";

export const currency = (value: Number | String): string =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export const getTotalListValue = (marketList: any[]): Number =>
  marketList.reduce((a, b) => a + b.price * b.quantity, 0);

export const formatTitleListItem = (title: string): string =>
  title.length >= 14 ? `${title.slice(0, 14)}...` : title;

export const getItemsBySession = (
  marketList: MarketListItem[],
  session: string
): MarketListItem[] => marketList.filter((item) => item.session === session);

export const getTotalBySession = (
  marketList: MarketListItem[],
  session: string
): Number => getTotalListValue(getItemsBySession(marketList, session));
