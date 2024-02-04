import { useState, useEffect } from 'react';
import Favorites from './components/Favorites';
import AddCards from './components/AddCards';
import Cards from './components/Cards';
import { GlobalStyle } from './components/styled-components';
import { Card } from './interfaces/card';

export default function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards") || "[]") as Card[];
    setCards((prevCards) => {
      if (JSON.stringify(prevCards) !== JSON.stringify(storedCards)) {
        return storedCards;
      }
      return prevCards;
    });
  }, []);

  function updateStoredCards(newCards: Card[]) {
    localStorage.setItem("cards", JSON.stringify(newCards));
    setCards(newCards);
  }
  
  function handleFavorite(index: number){
    const updatedCards = [...cards];
    updatedCards[index].favorite = !updatedCards[index].favorite;
    updateStoredCards(updatedCards);
  }

  function handleDeleteCard(index: number){
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    updateStoredCards(updatedCards);
  }

  function handleDarkTheme(){
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <GlobalStyle handleDarkTheme={darkTheme}/>
      <div>
        <AddCards
          updateStoredCards={updateStoredCards}
          cards={cards}
          showFavorites={{ showFavorites, setShowFavorites }}
          handleDarkTheme={handleDarkTheme}
          darkTheme={darkTheme}
        />
        {showFavorites ?
          (<Favorites
            cards={cards}
            handleFavorite={handleFavorite}
            handleDeleteCard={handleDeleteCard}
          />) : (<Cards
            cards={cards}
            handleFavorite={handleFavorite}
            handleDeleteCard={handleDeleteCard}
          />)
        }
      </div>
    </>
  );
}
