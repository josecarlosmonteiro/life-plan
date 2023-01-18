import { uniqueId } from "lodash";
import React, {
  BaseSyntheticEvent,
  createRef,
  FormEvent,
  useState,
} from "react";
import * as S from "./styles/newMarketItemFormStyle";
import { currency, formatTitleListItem } from "./marketFunctions";

interface NewMarketItemFormProps {
  modalState: boolean;
  controlModalFunction: Function;
  addNewItems: Function;
}

export default function NewMarketItemForm({
  modalState,
  controlModalFunction,
  addNewItems,
}: NewMarketItemFormProps) {
  const [newItems, setNewItems] = useState<Record<string, number | string>[]>(
    []
  );
  const [newItem, setNewItem] = useState<Record<string, number | string>>({});

  const inputTitleRef: any = createRef();

  const handleNewItem = ({ target: { id, value } }: BaseSyntheticEvent) =>
    setNewItem((oldState) => ({ ...oldState, [id]: value }));

  const removeNewListItem = (id: string) =>
    setNewItems((oldState) => oldState.filter((item) => item.id !== id));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNewItems(newItems.concat({ ...newItem, id: uniqueId() }));
    setNewItem({});
    inputTitleRef.current.focus();
  };

  const handleNewListItems = () => {
    addNewItems(newItems);
    setNewItems([]);
    controlModalFunction(false);
  };

  return (
    <>
      <div>
        <button
          style={{ margin: "12px 0px 22px", padding: 8 }}
          onClick={() => controlModalFunction(true)}
        >
          Add produto(s)
        </button>
      </div>
      <S.Container state={modalState}>
        <S.Form onSubmit={handleSubmit}>
          <S.FormTitle>
            <span>Adicionar produto(s)</span>
            <button type="button" onClick={() => controlModalFunction(false)}>
              fechar
            </button>
          </S.FormTitle>
          <br />
          <S.Column>
            <S.Flex>
              <S.FormGroup style={{ marginRight: 14 }}>
                <label htmlFor="">Produto</label>
                <S.Input
                  id="title"
                  ref={inputTitleRef}
                  type="text"
                  placeholder="Nome do produto..."
                  onChange={handleNewItem}
                  value={newItem.title || ""}
                  autoFocus
                  required
                />
              </S.FormGroup>
              <S.FormGroup style={{ marginLeft: 14 }}>
                <label htmlFor="">Quantidade</label>
                <S.Input
                  id="quantity"
                  type="number"
                  placeholder="1"
                  step={1}
                  onChange={handleNewItem}
                  value={newItem.quantity || ""}
                  required
                />
              </S.FormGroup>
            </S.Flex>
            <S.Flex style={{ marginTop: 22 }}>
              <S.FormGroup style={{ marginRight: 14 }}>
                <label htmlFor="">Preço</label>
                <S.Input
                  id="price"
                  type="number"
                  step={0.01}
                  placeholder="R$ 10,99..."
                  onChange={handleNewItem}
                  value={newItem.price || ""}
                  required
                />
              </S.FormGroup>
              <S.FormGroup style={{ marginLeft: 14 }}>
                <label htmlFor="">Sessão</label>
                <S.Input
                  id="session"
                  type="text"
                  placeholder="alimento/limpeza..."
                  onChange={handleNewItem}
                  value={newItem.session || ""}
                />
              </S.FormGroup>
            </S.Flex>
          </S.Column>
          <div
            style={{
              margin: "18px 0px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <S.FormBtn type="submit">adicionar</S.FormBtn>
            <S.FormBtn type="reset">limpar</S.FormBtn>
            {!!newItems.length && (
              <S.FormBtn type="button" onClick={handleNewListItems}>
                Finalizar
              </S.FormBtn>
            )}
          </div>
          {!!newItems.length && (
            <div
              style={{
                border: "1px solid #aaa",
                borderRadius: 4,
                padding: 8,
                backgroundColor: "#efefef",
              }}
            >
              <S.NewItemsList>
                {newItems.map((item: any) => (
                  <S.NewItem
                    key={item.id}
                    onClick={() => removeNewListItem(item.id)}
                  >
                    <span>
                      {item.quantity}x {formatTitleListItem(item.title)}
                    </span>
                    <span>{currency(Number(item.price))}</span>
                  </S.NewItem>
                ))}
              </S.NewItemsList>
            </div>
          )}
        </S.Form>
      </S.Container>
    </>
  );
}
