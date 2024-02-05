import { useState } from 'react';
import { Card } from '../interfaces/card';
import { ShowFavorites } from '../interfaces/showFavorites';
import { ShowFavorite, ChoiceButtons, CardForm, ThemeSelection } from './styled-components';

export default function AddCards({
  updateStoredCards,
  cards,
  showFavorites,
  handleDarkTheme,
  darkTheme,
}:{
  updateStoredCards: (newCards: Card[]) => void;
  cards: Card[];
  showFavorites: ShowFavorites;
  handleDarkTheme: () => void;
  darkTheme: boolean;
}) {
    const [title, setTitle] = useState<string>("");
    const [link, setLink] = useState<string>("");
    const [description, setDescription] = useState<string>("");
  
    function handleSave() {
      if(title === "" || link === "" || description === ""){
        return alert("Il campo titolo, link o descrizione immagine non può essere vuoto, riprovare.");
      }
      const newCard: Card = { title, link, description, favorite: false };
      const newCards = [...cards, newCard]
      updateStoredCards(newCards);
      setTitle("");
      setLink("");
      setDescription("");
    }
  
    return (
      <div>
        <CardForm showContents={showFavorites.showFavorites}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titolo" />
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link immagine" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrizione" />
          <button onClick={handleSave}>Aggiungi card</button>
        </CardForm>
        <ShowFavorite>
          <ChoiceButtons onClick={() => showFavorites.setShowFavorites(false)}>Home</ChoiceButtons>
          <ChoiceButtons onClick={() => showFavorites.setShowFavorites(true)}>Preferiti</ChoiceButtons>
          <ChoiceButtons onClick={() => handleDarkTheme()}>
            <ThemeSelection darkTheme={darkTheme} />
          </ChoiceButtons>
        </ShowFavorite>
      </div>
    );
  }
  